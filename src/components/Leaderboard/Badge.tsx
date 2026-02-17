import React from 'react';
import { Box, Typography, Tooltip, Zoom } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface BadgeProps {
    type: 'gold' | 'silver' | 'bronze' | 'empty';
    details?: string[]; // List of tournament names
}

const Badge: React.FC<BadgeProps> = ({ type, details = [] }) => {
    const count = details.length;
    let color = '#333';
    let text = '-';
    let borderColor = '#333';
    let showIcon = false;

    switch (type) {
        case 'gold':
            color = '#FFC107'; // Amber/Gold
            text = '第一名';
            borderColor = '#FFC107';
            showIcon = true;
            break;
        case 'silver':
            color = '#E0E0E0'; // Silver
            text = '第二名';
            borderColor = '#E0E0E0';
            showIcon = true;
            break;
        case 'bronze':
            color = '#CD7F32'; // Bronze
            text = '第三名';
            borderColor = '#CD7F32';
            showIcon = true;
            break;
        default:
            break;
    }

    const badgeContent = (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: `1px solid ${borderColor}`,
                borderRadius: '50px',
                padding: '4px 12px',
                color: color,
                opacity: type === 'empty' ? 0.3 : 1,
                minWidth: '100px',
                justifyContent: 'center',
                position: 'relative',
                cursor: count > 0 ? 'pointer' : 'default',
                userSelect: 'none',
                transition: 'all 0.2s',
                '&:hover': {
                    backgroundColor: count > 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                }
            }}
        >
            {showIcon && <EmojiEventsIcon fontSize="small" sx={{ mr: 0.5 }} />}
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {text}
            </Typography>
            {count > 1 && (
                <Box
                    sx={{
                        position: 'absolute',
                        right: -8,
                        bottom: -8,
                        bgcolor: '#424242',
                        color: 'white',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        border: '1px solid #666',
                    }}
                >
                    {count}
                </Box>
            )}
        </Box>
    );

    if (count === 0 && type !== 'empty') {
        // Should not adhere to this logic based on previous implementation but simplified here:
        // If "gold" is passed but details is empty, it means 0 count.
        // However, the caller usually passes 'empty' if count is 0.
        // But let's handle the case just in case.
    }

    if (type === 'empty' || count === 0) {
        return badgeContent;
    }

    return (
        <Tooltip
            title={
                <Box sx={{ p: 0.5 }}>
                    {details.map((detail, index) => (
                        <Typography key={index} variant="body2" sx={{
                            fontSize: '0.8rem',
                            py: 0.25,
                            borderBottom: index !== details.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                        }}>
                            {detail}
                        </Typography>
                    ))}
                </Box>
            }
            arrow
            TransitionComponent={Zoom}
            slotProps={{
                tooltip: {
                    sx: {
                        bgcolor: '#333333',
                        color: '#ffffff',
                        border: '1px solid #555',
                        '& .MuiTooltip-arrow': {
                            color: '#333333',
                        },
                    },
                },
            }}
        >
            {badgeContent}
        </Tooltip>
    );
};

export default Badge;
