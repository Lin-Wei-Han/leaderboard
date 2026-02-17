import React from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { type TeamData } from '../../data/mockData';

interface TeamDetailsSidebarProps {
    open: boolean;
    onClose: () => void;
    team: TeamData | null;
}

const TeamDetailsSidebar: React.FC<TeamDetailsSidebarProps> = ({ open, onClose, team }) => {
    if (!team) return null;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 600 },
                    backgroundColor: '#1E1E1E',
                    color: '#ffffff',
                    p: 0,
                },
            }}
        >
            {/* Header Section */}
            <Box sx={{ p: 4, pb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                            {team.name}
                        </Typography>
                    </Box>
                    <IconButton onClick={onClose} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            <Divider sx={{ borderColor: '#333' }} />

            {/* Content Section */}
            <Box sx={{ p: 4, pt: 2 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    參賽次數 : {team.participationCount}
                </Typography>

                {/* History List */}
                <Box sx={{ mb: 4, border: '1px solid #333', borderRadius: 2, p: 2 }}>
                    {team.history && team.history.length > 0 ? (
                        team.history.map((record, index) => (
                            <Box key={index}>
                                <Box sx={{ py: 2 }}>
                                    {/* Header: Icon + Tournament Name */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {record.placement === 'gold' && <EmojiEventsIcon sx={{ color: '#FFC107' }} />}
                                            {record.placement === 'silver' && <EmojiEventsIcon sx={{ color: '#E0E0E0' }} />}
                                            {record.placement === 'bronze' && <EmojiEventsIcon sx={{ color: '#CD7F32' }} />}
                                        </Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {record.tournament}
                                        </Typography>
                                    </Box>

                                    {/* Content: Members + Video */}
                                    <Box sx={{ pl: 4 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: record.videoUrl ? 2 : 0 }}>
                                            {record.members.map((member, idx) => (
                                                <Typography key={idx} variant="body2" sx={{ color: '#b0b0b0' }}>
                                                    {member}
                                                </Typography>
                                            ))}
                                        </Box>

                                        {record.videoUrl && (
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    aspectRatio: '16/9',
                                                    borderRadius: 2,
                                                    overflow: 'hidden',
                                                    bgcolor: '#000',
                                                    mt: 2
                                                }}
                                            >
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={record.videoUrl}
                                                    title={`${record.tournament} Video`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                                {index < (team.history?.length || 0) - 1 && (
                                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                                )}
                            </Box>
                        ))
                    ) : (
                        <Typography sx={{ color: '#888', py: 2, textAlign: 'center' }}>
                            無詳細參賽紀錄
                        </Typography>
                    )}
                </Box>
            </Box>
        </Drawer>
    );
};

export default TeamDetailsSidebar;
