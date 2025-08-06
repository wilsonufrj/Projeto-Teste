import { styled } from '@mui/material/styles';
import { FormControlLabel, Input as MuiInput, type InputProps,type FormControlLabelProps } from '@mui/material';
import React from 'react';

interface TextFieldProps extends Omit<FormControlLabelProps, 'control' | 'label' | 'onChange'> {
  label?: React.ReactNode;
  value?: string;
  onChange: (value: string) => void;
  inputProps?: InputProps;
}

const CustomInput = styled(MuiInput)<InputProps>(({ theme }) => ({
  borderRadius: '10px',
  border: `1px solid ${theme.palette.divider}`,
  boxDecoration: 'none',
  padding: '15px 20px 15px 20px',
  '&::before, &::after': {
    display: 'none',
  },
}));

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, value, onChange, inputProps, ...formControlLabelProps } = props;

  return (
    <FormControlLabel
      {...formControlLabelProps}
      labelPlacement='start'
      label={label}
      control={
        <CustomInput 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
      }
      sx={{
        display: 'flex',
        '& .MuiFormControlLabel-label': {
          marginRight: '30px',
        },
        ...formControlLabelProps.sx // Mescla os estilos sx passados como prop
      }}
    />
  );
};

export default TextField;