import React from "react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { FieldErrorHint } from "../FieldErrorHint/FieldErrorHint";
import { Box, TextField, Typography } from "@mui/material";
import InfoPopover from "../InfoPopover/InfoPopover";
import { ValidationError } from "../WizardStepper/validationSectionTypes";
import InfoIcon from '@mui/icons-material/Info';
import "moment/locale/pt-br";

interface CalendarProps extends Omit<DatePickerProps<any, any>, "error"> {
    errorKey?: string;
    errorMap?: ValidationError[];
    message?: string;
    width?: number | string;
    label?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
    errorKey,
    errorMap = [],
    message,
    width = 200,
    label,
    ...props
}) => {
    const error = errorMap.find((e) => e.key === errorKey);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
            }}
        >
            {label && (
                <Typography
                    variant="h6"
                    sx={{ minWidth: 100, fontWeight: 500 }}
                >
                    {label}
                </Typography>
            )}

            <FieldErrorHint errorKey={errorKey} errorMap={errorMap}>
                <DatePicker
                    {...props}
                    slots={{ textField: TextField }}
                    slotProps={{
                        textField: {
                            error: !!error,
                            fullWidth: false,
                            sx: {
                                width,
                                backgroundColor: "#fff",
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                },
                            },
                            placeholder: "Formato dd/mm/aaaa",
                        },
                    }}
                />
            </FieldErrorHint>

            {message && (
                <InfoPopover message={message} IconComponent={InfoIcon} />
            )}
        </Box>
    );
};

