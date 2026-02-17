import React from 'react';
import { Paper, Typography } from '@mui/material';

const InfoSidebar: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                backgroundColor: '#1E1E1E',
                borderRadius: 2,
                height: 'fit-content'
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                什麼是俱樂部賽事記錄？
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                榜上記錄了宮燈盃過去歷年四強隊伍的戰績紀錄...
            </Typography>
        </Paper>
    );
};

export default InfoSidebar;
