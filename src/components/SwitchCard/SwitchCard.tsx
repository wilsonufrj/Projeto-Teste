import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import IOSSwitch from '../SwitchLabel/IOSSwitch';

export interface SwitchCardItem {
    id: string;
    nome: string;
    selecionado: boolean;
}

interface SwitchCardProps {
    item: SwitchCardItem;
    onToggle: (id: string) => void;
}

const SwitchCard: React.FC<SwitchCardProps> = ({ item, onToggle }) => {
    return (
        <Card
            sx={{
                padding: '30px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                border: '1px solid #ccc',
                boxShadow: 'none',
                minHeight: '170px',
            }}
        >
            <IOSSwitch
                sx={{ m: 1 }}
                checked={item.selecionado}
                onChange={() => onToggle(item.id)}
            />

            <Box sx={{ marginTop: 1 }}>
                <Typography variant="body1" fontWeight={500} textAlign="center">
                    {item.nome}
                </Typography>
            </Box>
        </Card>
    );
};

export default SwitchCard;