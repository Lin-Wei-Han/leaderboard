import React from 'react';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #333' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <Button color="inherit" sx={{ color: '#b0b0b0', textTransform: 'none', fontSize: '1rem' }}>
                            首頁
                        </Button>
                        <Button color="inherit" sx={{ color: '#b0b0b0', textTransform: 'none', fontSize: '1rem' }}>
                            活動與賽事
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                color: '#ffffff',
                                textTransform: 'none',
                                fontSize: '1rem',
                                borderBottom: '2px solid #ffffff',
                                borderRadius: 0,
                                paddingBottom: '4px'
                            }}
                        >
                            俱樂部
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
