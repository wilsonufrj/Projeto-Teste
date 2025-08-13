import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustomButton = styled(MuiButton)<ButtonProps>(({ theme, variant }) => ({
    borderRadius: '10px',
    padding: '10px 20px 10px 20px',
    fontSize: '14px',
    fontFamily: theme.typography.fontFamily,
    textTransform: 'none',
    fontWeight: 400,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
        duration: theme.transitions.duration.short,
    }),

    ...(variant === 'contained' && {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: "none",
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),

    ...(variant === 'outlined' && {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        '&:hover': {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
            backgroundColor: 'transparent',
        },
    }),

    ...(variant === 'text' && {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.dark,
            backgroundColor: 'transparent',
        },
    }),

    '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
        ...(variant === 'outlined' && {
            borderColor: theme.palette.action.disabled,
        }),
    },
}));

const Button: React.FC<ButtonProps> = (props) => {
    return <CustomButton {...props} />;
};

export default Button;