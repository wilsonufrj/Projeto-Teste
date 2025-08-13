import React, { useRef, useEffect, useState, ReactNode } from "react";
import { Box, Popover, Typography } from "@mui/material";
import CloseIconButton from "../CloseIconButton/CloseIconButton";

interface ErrorItem {
    key: string;
    message: string;
}

interface FieldErrorHintProps {
    children: ReactNode;
    errorKey: string;
    errorMap: ErrorItem[];
}

export const FieldErrorHint: React.FC<FieldErrorHintProps> = ({
    children,
    errorKey,
    errorMap,
}) => {
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [alignRight, setAlignRight] = useState(true);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const error = errorMap.find((e) => e.key === errorKey);
    const hasError = Boolean(error);

    const handleClick = () => {
        if (buttonRef.current) {
            setAnchorEl(buttonRef.current);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (anchorEl) {
            const rect = anchorEl.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            const willOverflowRight = rect.right + 320 > screenWidth;

            setAlignRight(!willOverflowRight);
        }
    }, [anchorEl]);


    return (
        <Box sx={{ position: "relative" }}>
            {children}

            {hasError && (
                <Box
                    ref={buttonRef}
                    onClick={handleClick}
                    sx={{
                        position: "absolute",
                        lineHeight: "initial",
                        top: 0,
                        right: 0,
                        width: 20,
                        height: 20,
                        backgroundColor: "red",
                        clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                        zIndex: 2,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        '&::after': {
                            content: '"!"',
                            position: "absolute",
                            top: "0.2px",
                            right: "3.5px",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "12px",
                            fontFamily: "Arial, sans-serif",
                            zIndex: 2,
                        },
                    }}
                >
                </Box>
            )}

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: alignRight ? "right" : "left",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: alignRight ? "left" : "right",
                }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: "6px",
                            ml: alignRight ? "11px" : "unset",
                            mr: alignRight ? "unset" : "11px",
                            border: "1px solid #ff0000",
                            borderRadius: "10px",
                            overflow: "visible",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
                            backgroundColor: "#fff",

                            [`&::before`]: {
                                content: '""',
                                position: "absolute",
                                top: "50%",
                                [alignRight ? "left" : "right"]: "-10px",
                                transform: "translateY(-50%)",
                                borderTop: "9px solid transparent",
                                borderBottom: "9px solid transparent",
                                [alignRight ? "borderRight" : "borderLeft"]: "10px solid #fff",
                                zIndex: 1,
                            },

                            [`&::after`]: {
                                content: '""',
                                position: "absolute",
                                top: "50%",
                                [alignRight ? "left" : "right"]: "-12px",
                                transform: "translateY(-50%)",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                [alignRight ? "borderRight" : "borderLeft"]: "12px solid #ff0000",
                                zIndex: 0,
                            },
                        },
                    },
                }}
            >
                <Box p={2} position="relative" sx={{ maxWidth: "314px" }}>
                    <Typography sx={{ color: "#637883" }}>{error?.message}</Typography>
                    <Box sx={{ top: 1, [alignRight ? "right" : "left"]: 1 }}>
                        <CloseIconButton onClick={handleClose} />
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
};