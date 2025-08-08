import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CloseIconButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    top?: string;
    right?: string;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({ onClick, top = '-10px', right = '-10px' }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                backgroundColor: '#8EA4AF',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#6B8A95',
                },
                borderRadius: '50%',
                padding: '1px',
                position: 'absolute',
                top: top,
                right: right,
            }}
        >
            <CloseIcon />
        </IconButton>
    );
};

export default CloseIconButton;