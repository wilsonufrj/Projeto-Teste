import React from "react";
import { Card, Typography, Box, type SxProps } from '@mui/material';
import SwitchLabel from '../SwitchLabel/SwitchLabel';

export interface SwitchItem {
    id: string;
    label: string;
    checked: boolean;
    message?: string;
}

interface SwitchCardProps {
    title?: string;
    switches: SwitchItem[];
    onToggle: (id: string) => void;
    labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
    cardSize?: {
        width?: number | string;
        height?: number | string;
    };
    contentSx?: SxProps;
}

const SwitchCard: React.FC<SwitchCardProps> = ({
    title,
    switches,
    onToggle,
    labelPlacement = 'start',
    cardSize,
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                p: '30px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: '1px solid #ccc',
                width: cardSize?.width || 'fit-content',
                height: cardSize?.height,
                maxWidth: '100%',
            }}
        >
            {title && (
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                    {title}
                </Typography>
            )}

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    minHeight: undefined,
                    minWidth: undefined,
                }}
            >

                {switches.map((item) => (
                    <SwitchLabel
                        key={item.id}
                        label={item.label}
                        message={item.message}
                        checked={item.checked}
                        onChange={() => onToggle(item.id)}
                        labelPlacement={labelPlacement}
                    />
                ))}
            </Box>
        </Card>
    );
};

export default SwitchCard;