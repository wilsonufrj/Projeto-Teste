import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    styled,
    Select as MuiSelect,
    type SelectProps,
    FormControlLabel,
    type FormControlLabelProps,
    MenuItem
} from "@mui/material";
import theme from '../theme';

interface SelectOptionsProps extends Omit<FormControlLabelProps, 'control' | 'label' | 'onChange'> {
    label?: React.ReactNode;
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    options?: string[];
}

const CustomSelectOtions = styled(MuiSelect)<SelectProps>(({ theme }) => ({
    padding: '15px 20px',
    display: 'flex',
    height: '60px',
    borderRadius: '10px',
    border: `1px solid ${theme.palette.grey[300]}`,
    '& .MuiSelect-icon': {
        color: theme.palette.primary.main,
        fontSize: '2rem',
    },
    '& .MuiSelect-select': {
        display: 'flex',
        justifyContent: 'start'
    }
}));

const SelectOptions: React.FC<SelectOptionsProps> = ({
    label,
    value = "Selecione versão",
    placeholder,
    onChange,
    options = [],
    sx,
    ...formControlLabelProps
}) => {
    return (
        <FormControlLabel
            labelPlacement='start'
            label={label}
            control={
                <CustomSelectOtions
                    value={value}
                    IconComponent={ArrowDropDownIcon}
                    displayEmpty
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        onChange(target.value);
                    }}
                >
                    <MenuItem value="" disabled>
                        <span style={{ color: `${theme.palette.grey[100]}` }}>{placeholder}</span>
                    </MenuItem>
                    {
                        options.map((option) => {
                            return <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>;
                        })
                    }
                </CustomSelectOtions>
            }
            sx={{
                '& .MuiFormControlLabel-label': {
                    marginRight: '30px',
                },
                ...sx
            }}
            {...formControlLabelProps}
        />
    );
}

export default SelectOptions;