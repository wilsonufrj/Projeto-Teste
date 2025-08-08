import React from "react";
import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import InfoPopover from "../InfoPopover/InfoPopover";

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
    buttonSx?: SxProps<Theme>;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
    value,
    lista,
    onChange,
    label,
    message,
    horizontal = false,
    labelPosition = "side",
    labelClassName,
    optionClassName,
    getButtonRef,
    buttonSx
}) => {
    const isLabelAbove = labelPosition === "above";
    return (
        <Box
            display="flex"
            flexDirection={isLabelAbove ? "column" : "row"}
            alignItems={isLabelAbove ? "flex-start" : "baseline"}
            gap={isLabelAbove ? 2 : 1}
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
                        sx={{
                            textTransform: "none",
                            fontWeight: value === item.id ? "bold" : "normal",
                            width: horizontal ? "auto" : "100%",
                            backgroundColor: value === item.id ? "#0088cc" : "#fff",
                            ...buttonSx
                        }}
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