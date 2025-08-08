import React, { useState } from 'react';
import { IconButton, Popover, Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIconButton from '../CloseIconButton/CloseIconButton';

interface InfoPopoverProps {
    message: string;
    IconComponent?: React.ElementType;
}

const InfoPopover: React.FC<InfoPopoverProps> = ({ message, IconComponent = InfoIcon }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'info-popover' : undefined;

    return (
        <>
            <IconButton onClick={handleClick} sx={{
                color: open ? '#1AB2FF' : '#8EA4AF',
                display: 'inline'
            }}>
                <IconComponent />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            border: '2px solid #1ab2ff', // Azul da borda
                            borderRadius: '10px',
                            overflow: 'visible', // Permite que a seta fique fora
                            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)', // Sombra leve
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '-11px', // Ajusta a seta à esquerda
                                transform: 'translateY(-50%)',
                                borderTop: '10px solid transparent',
                                borderBottom: '10px solid transparent',
                                borderRight: '10px solid #1ab2ff', // Seta branca
                            },
                        },
                    },
                }}
            >
                <Box p={2} position="relative" sx={{ maxWidth: '314px' }}>
                    <Typography sx={{ color: '#637883' }}>{message}</Typography>
                    <CloseIconButton onClick={handleClose} />
                </Box>
            </Popover>
        </>
    );
};

export default InfoPopover;