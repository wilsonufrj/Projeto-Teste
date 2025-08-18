import { SwitchCard, SwitchLabel, type SwitchItem } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const PlanilhaResultado = () => {
    const [selecionarTodas, setSelecionarTodas] = useState<boolean>(false);
    const [custoMarginalSubmercados, setCustoMarginalSubmercado] = useState<SwitchItem[]>([
        { id: '1', label: 'PDOCMOSIST', checked: true, message: 'Informações planilha 1' },
       
    ]);

    const [balancoEnergiaSubmercado, setBalancoEnergiaSubmercado] = useState<SwitchItem[]>([
        { id: '1', label: 'PDOSIST', checked: true, message: 'Informações planilha 1' },
    ]);

    const [operacaoUsinasHidraulicas, setOperacaoUsinasHidraulicas] = useState<SwitchItem[]>([
        { id: '1', label: 'PDOHIDR', checked: true, message: 'Informações planilha 1' },
       
    ]);


    const handleToggle = (
        id: string,
        setState: React.Dispatch<React.SetStateAction<SwitchItem[]>>
    ) => {
        setState((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <Box sx={{ width: '100' }}>
            <Box sx={{ display: "flex", justifySelf: 'start', marginBottom: '60px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%" }}>
                    Planilha de resultados
                </Typography>
            </Box>
            <Box>
                <SwitchLabel
                    label="Selecionar todas"
                    checked={selecionarTodas}
                    labelPlacement="start"
                    message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => setSelecionarTodas(checked)} />

                <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap:'30px' }}>
                        <SwitchCard
                            title="Custo Marginal - Submercados"
                            switches={custoMarginalSubmercados}
                            onToggle={(id) => handleToggle(id, setCustoMarginalSubmercado)}
                        />

                        <SwitchCard
                            title="Balanço de energia - Submercados"
                            switches={balancoEnergiaSubmercado}
                            onToggle={(id) => handleToggle(id, setBalancoEnergiaSubmercado)}
                        />

                        <SwitchCard
                            title="Operação usinas hidráulicas"
                            switches={operacaoUsinasHidraulicas}
                            onToggle={(id) => handleToggle(id, setOperacaoUsinasHidraulicas)}
                        />
                    </Box>
                    
                </Stack>
            </Box>
        </Box>
    )
}

export default PlanilhaResultado;