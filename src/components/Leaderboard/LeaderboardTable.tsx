import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
} from '@mui/material';
import { type TeamData } from '../../data/mockData';
import Badge from './Badge';

interface LeaderboardTableProps {
    onRowClick: (team: TeamData) => void;
    teams: TeamData[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ onRowClick, teams }) => {
    return (
        <TableContainer component={Paper} elevation={0} sx={{ backgroundColor: '#1E1E1E', borderRadius: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ width: '80px', pl: 0 }}>編號</TableCell>
                        <TableCell>隊伍名稱</TableCell>
                        <TableCell align="center">參賽次數</TableCell>
                        <TableCell>歷史賽積</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams.map((team) => {
                        // Derive badge details from history
                        const firstPlace = team.history
                            .filter(h => h.placement === 'gold')
                            .map(h => h.tournament);

                        const secondPlace = team.history
                            .filter(h => h.placement === 'silver')
                            .map(h => h.tournament);

                        const thirdPlace = team.history
                            .filter(h => h.placement === 'bronze')
                            .map(h => h.tournament);

                        return (
                            <TableRow
                                key={team.id}
                                onClick={() => onRowClick(team)}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    }
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    sx={{ pl: 0, color: '#f0f0f0', fontSize: '1.2rem' }}
                                >
                                    {team.id}
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#fff' }}>
                                            {team.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#888' }}>
                                            {team.subtitle}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" sx={{ color: '#f0f0f0', fontSize: '1.1rem' }}>
                                    {team.participationCount}
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        {/* First Place Slot */}
                                        {firstPlace.length > 0 ? (
                                            <Badge type="gold" details={firstPlace} />
                                        ) : (
                                            <Badge type="empty" />
                                        )}

                                        {/* Second Place Slot */}
                                        {secondPlace.length > 0 ? (
                                            <Badge type="silver" details={secondPlace} />
                                        ) : (
                                            <Badge type="empty" />
                                        )}

                                        {/* Third Place Slot */}
                                        {thirdPlace.length > 0 ? (
                                            <Badge type="bronze" details={thirdPlace} />
                                        ) : (
                                            <Badge type="empty" />
                                        )}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LeaderboardTable;
