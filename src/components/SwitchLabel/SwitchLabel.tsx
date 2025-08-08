import React, { useEffect, useRef } from 'react';
import { Box, FormControlLabel } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import IOSSwitch from './IOSSwitch';
import InfoPopover from '../InfoPopover/InfoPopover';

interface SwitchLabelProps {
    label: string;
    message?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    labelPlacement?: "top" | "bottom" | "end" | "start";
    disabled?: boolean;
    getSwitchRef?: (el: HTMLElement | null) => void;
}

const SwitchLabel: React.FC<SwitchLabelProps> = ({ label, message, checked, onChange, labelPlacement = "start", disabled = false, getSwitchRef }) => {
    const internalRef = useRef<HTMLElement | null>(null);
    const lastRef = useRef<HTMLElement | null>(null);
    return (
        <Box display="flex" alignItems="center">
            <FormControlLabel
                label={label}
                control={
                    <IOSSwitch
                        sx={{ m: 1 }}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        inputRef={(el) => {
                            if (el && el !== lastRef.current) {
                                lastRef.current = el;
                                getSwitchRef?.(el);
                            }
                        }}

                    />
                }
                labelPlacement={labelPlacement}
                disabled={disabled}
            />
            {message && (
                <>
                    <InfoPopover message={message} IconComponent={InfoIcon} />
                </>
            )}
        </Box>
    );
};

export default SwitchLabel;