import Papa from 'papaparse';
import { type TeamData, type HistoryRecord } from '../data/mockData';

// Structure of a row in the Google Sheet
export interface SheetRow {
    team_id: string;
    team_name: string;
    team_subtitle: string;
    tournament_name: string;
    placement: string; // 'gold' | 'silver' | 'bronze' | ''
    members: string; // Comma separated
    video_url: string;
}

export const fetchLeaderboardData = async (sheetUrl: string): Promise<TeamData[]> => {
    if (!sheetUrl) {
        console.warn('Google Sheet URL not provided.');
        return [];
    }

    try {
        const response = await fetch(sheetUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch CSV: ${response.statusText}`);
        }

        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse<SheetRow>(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const parsedData = transformSheetData(results.data as unknown as SheetRow[]); // Cast to expected type
                    resolve(parsedData);
                },
                error: (error: Error) => {
                    console.error('Papa Parse Error:', error);
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error('Error fetching Google Sheet data:', error);
        return []; // Return empty array on error to prevent crash
    }
};

const transformSheetData = (rows: SheetRow[]): TeamData[] => {
    const teamsMap = new Map<number, TeamData>();

    rows.forEach((row) => {
        const id = parseInt(row.team_id, 10);
        if (isNaN(id)) return;

        if (!teamsMap.has(id)) {
            teamsMap.set(id, {
                id,
                name: row.team_name,
                subtitle: row.team_subtitle,
                participationCount: 0,
                history: [],
            });
        }

        const team = teamsMap.get(id)!;

        // Validate placement
        let placement: HistoryRecord['placement'] = 'participant';
        const p = row.placement ? row.placement.toLowerCase().trim() : '';
        if (p === 'gold' || p === 'silver' || p === 'bronze') {
            placement = p as HistoryRecord['placement'];
        }

        // Add history record only if tournament name exists
        if (row.tournament_name) {
            team.history.push({
                tournament: row.tournament_name,
                placement,
                members: row.members ? row.members.split(',').map(m => m.trim()) : [],
                videoUrl: row.video_url || undefined,
            });
        }
    });

    // Calculate participation count
    return Array.from(teamsMap.values()).map(team => ({
        ...team,
        participationCount: team.history.length
    }));
};
