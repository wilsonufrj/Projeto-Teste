import React, { ReactNode } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  errorMessage?: string;
  onPrimaryAction?: () => void;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  width?: number | string | undefined;
}

const SideBar: React.FC<SideBarProps> = ({
  open,
  onClose,
  title = 'Título',
  children,
  errorMessage,
  onPrimaryAction,
  primaryActionLabel = 'Confirmar',
  secondaryActionLabel = 'Cancelar',
  onSecondaryAction,
  width
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: ((width) ? width : 600),
          padding: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h2">{title}</Typography>
          <IconButton onClick={onClose} sx={{ backgroundColor: '#8EA4AF', color: '#FFFFFF' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        {children}

        <Box display="flex" justifyContent="center" gap={2} mt="auto">
          {onSecondaryAction && (
            <Button variant="outlined" onClick={onSecondaryAction} sx={{ width: '312px' }}>
              {secondaryActionLabel}
            </Button>
          )}
          {onPrimaryAction && (
            <Button variant="contained" onClick={onPrimaryAction} sx={{ width: '312px' }}>
              {primaryActionLabel}
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;