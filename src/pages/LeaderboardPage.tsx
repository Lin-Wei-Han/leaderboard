import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, CircularProgress } from '@mui/material';
import MainLayout from '../components/Layout/MainLayout';
import LeaderboardTable from '../components/Leaderboard/LeaderboardTable';
import InfoSidebar from '../components/InfoPanel/InfoSidebar';
import TeamDetailsSidebar from '../components/Sidebar/TeamDetailsSidebar';
import { type TeamData, mockTeams } from '../data/mockData';
import { fetchLeaderboardData } from '../services/googleSheetService';

// TODO: Replace with your actual Google Sheet CSV URL
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZgsX3h8fvhAp6HzxfM_925-_ypVNDpSErue3sf3vqjMOeVidMQ9UGf1yeE_on6B88F2i9IX9oxTev/pub?gid=0&single=true&output=csv';

const LeaderboardPage: React.FC = () => {
    const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [teams, setTeams] = useState<TeamData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            if (!GOOGLE_SHEET_CSV_URL) {
                // Fallback to mock data if no URL provided
                setTeams(mockTeams);
                setLoading(false);
                return;
            }

            try {
                const data = await fetchLeaderboardData(GOOGLE_SHEET_CSV_URL);
                if (data.length > 0) {
                    setTeams(data);
                } else {
                    console.warn('No data fetched from Google Sheets, using mock data.');
                    setTeams(mockTeams);
                }
            } catch (error) {
                console.error('Failed to load data, using mock data:', error);
                setTeams(mockTeams);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const handleRowClick = (team: TeamData) => {
        setSelectedTeam(team);
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <MainLayout>
            <Container maxWidth="xl">
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
                        俱樂部賽事記錄
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        更新時間 : {new Date().toLocaleDateString()}
                    </Typography>
                </Box>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
                        <CircularProgress sx={{ color: '#fff' }} />
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 9 }}>
                            <LeaderboardTable onRowClick={handleRowClick} teams={teams} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <InfoSidebar />
                        </Grid>
                    </Grid>
                )}
            </Container>

            <TeamDetailsSidebar
                open={sidebarOpen}
                onClose={handleCloseSidebar}
                team={selectedTeam}
            />
        </MainLayout>
    );
};

export default LeaderboardPage;
