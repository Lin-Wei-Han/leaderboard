import React, { type ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
