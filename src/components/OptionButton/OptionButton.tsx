import React from "react";
import { Box, Typography, type SxProps } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Button from "../Button/Button";
import InfoPopover from "../InfoPopover/InfoPopover";
import type { Theme } from "@emotion/react";

export interface OptionButtonItem {
    id: number;
    descricao: string;
}

interface OptionButtonProps {
    value: string | number;
    lista: OptionButtonItem[];
    onChange: (id: number) => void;
    label?: string;
    message?: string;
    horizontal?: boolean;
    labelPosition?: "above" | "side";
    labelClassName?: string;
    optionClassName?: string;
    getButtonRef?: (el: HTMLElement | null) => void;
    sx?: SxProps<Theme>;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
    value,
    lista,
    onChange,
    label,
    message,
    horizontal = true,
    labelPosition = "side",
    labelClassName,
    optionClassName,
    getButtonRef,
    sx
}) => {
    const isLabelAbove = labelPosition === "above";
    return (
        <Box
            display="flex"
            flexDirection={isLabelAbove ? "column" : "row"}
            alignItems={isLabelAbove ? "flex-start" : "baseline"}
            gap={isLabelAbove ? 2 : 1}
            sx={{
                ...sx
            }}
        >
            {/* Label */}
            {label && (
                <Typography
                    variant="h6"
                    className={labelClassName}
                    sx={{
                        marginBottom: isLabelAbove ? 1 : 0,
                        marginRight: !isLabelAbove ? 2 : 0,
                        alignItems: "center",
                        display: "flex"
                    }}
                >
                    {label}
                </Typography>
            )}

            {/* Botões */}
            <Box
                display="flex"
                flexDirection={horizontal ? "row" : "column"}
                gap={horizontal ? 2 : 1}
                alignItems={horizontal ? "center" : "flex-start"}
                mb={3}
            >
                {lista.map((item) => (
                    <Button
                        ref={value === item.id ? (el) => getButtonRef?.(el!) : null}
                        key={`button_lista_${item.id}`}
                        variant={value === item.id ? "contained" : "outlined"}
                        onClick={() => onChange(item.id)}
                        className={optionClassName}
                        sx={{ borderRadius: '30px', padding: '10px 50px' }}
                    >
                        {item.descricao}
                    </Button>
                ))}
            </Box>
            {message && (
                <>
                    <InfoPopover message={message} IconComponent={InfoIcon} />
                </>
            )}
        </Box>
    );
};