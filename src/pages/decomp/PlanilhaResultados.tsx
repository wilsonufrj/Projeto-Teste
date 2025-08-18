import { SwitchCard, SwitchLabel, type SwitchItem } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const PlanilhaResultado = () => {
    const [selecionarTodas, setSelecionarTodas] = useState<boolean>(false);
    const [custoMarginalOperacao, setCustoMarginalOperacao] = useState<SwitchItem[]>([
        { id: '1', label: 'CMO', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'PLD', checked: true, message: 'Informações planilha 2' }
    ]);

    const [disponibilidadeHidraulica, setDisponibilidadeHidraulica] = useState<SwitchItem[]>([
        { id: '1', label: 'DISPHIDR', checked: true, message: 'Informações planilha 1' },
    ]);

    const [energiaArmazenada, setEnergiaArmazenada] = useState<SwitchItem[]>([
        { id: '1', label: 'EARM', checked: true, message: 'Informações planilha 1' },
    ]);

    const [energiaNaturalAfluente, setEnergiaNaturalAfluente] = useState<SwitchItem[]>([
        { id: '1', label: 'ENA', checked: true, message: 'Informações planilha 1' },

    ]);

    const [geracao, setGeracao] = useState<SwitchItem[]>([
        { id: '1', label: 'GERACAO', checked: true, message: 'Informações planilha 1' },
    ]);

    const [geraçãoHidraulica, setGeracaoHidraulica] = useState<SwitchItem[]>([
        { id: '1', label: 'GERUSIH', checked: true, message: 'Informações planilha 1' },

    ]);

    const [intercambio, setIntercambio] = useState<SwitchItem[]>([
        { id: '1', label: 'INTERC', checked: true, message: 'Informações planilha 1' },
    ]);

    const [usinasTermicas, setUsinasTermicas] = useState<SwitchItem[]>([
        { id: '1', label: 'USIT', checked: true, message: 'Informações planilha 1' }

    ]);

    const [valorAgua, setValorAgua] = useState<SwitchItem[]>([
        { id: '1', label: 'VALAGUA', checked: true, message: 'Informações planilha 1' },
    ]);

    const [vertimentoTotal, setVertimentoTotal] = useState<SwitchItem[]>([
        { id: '1', label: 'VERTURBR', checked: true, message: 'Informações planilha 1' },
    ]);

    const [vertimentoTurbinavel, setVertimentoTurbinavel] = useState<SwitchItem[]>([
        { id: '1', label: 'VERTURBR', checked: true, message: 'Informações planilha 1' },
    ]);

    const [volume, setVolume] = useState<SwitchItem[]>([
        { id: '1', label: 'VOLUME', checked: true, message: 'Informações planilha 1' },
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

                <Stack gap={'30px'}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '30px' }}>
                        <SwitchCard
                            title="Custo Marginal de Operação"
                            switches={custoMarginalOperacao}
                            onToggle={(id) => handleToggle(id, setCustoMarginalOperacao)}
                        />

                        <SwitchCard
                            title="Disponibilidade Hidráulica"
                            switches={disponibilidadeHidraulica}
                            onToggle={(id) => handleToggle(id, setDisponibilidadeHidraulica)}
                        />

                        <SwitchCard
                            title="Energia Armazenada"
                            switches={energiaArmazenada}
                            onToggle={(id) => handleToggle(id, setEnergiaArmazenada)}
                        />
                        <SwitchCard
                            title="Energia Natural Afluente"
                            switches={energiaNaturalAfluente}
                            onToggle={(id) => handleToggle(id, setEnergiaNaturalAfluente)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '30px' }}>
                        <SwitchCard
                            title="Geração"
                            switches={geracao}
                            onToggle={(id) => handleToggle(id, setGeracao)}
                        />
                        <SwitchCard
                            title="Geração Hidráulica"
                            switches={geraçãoHidraulica}
                            onToggle={(id) => handleToggle(id, setGeracaoHidraulica)}
                        />

                        <SwitchCard
                            title="Intercâmbio"
                            switches={intercambio}
                            onToggle={(id) => handleToggle(id, setIntercambio)}
                        />
                        <SwitchCard
                            title="Usinas Térmicas"
                            switches={usinasTermicas}
                            onToggle={(id) => handleToggle(id, setUsinasTermicas)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '30px' }}>
                        <SwitchCard
                            title="Valor da água"
                            switches={valorAgua}
                            onToggle={(id) => handleToggle(id, setValorAgua)}
                        />
                        <SwitchCard
                            title="Vertimento total"
                            switches={vertimentoTotal}
                            onToggle={(id) => handleToggle(id, setVertimentoTotal)}
                        />
                        <SwitchCard
                            title="Vertimento Turbinavel"
                            switches={vertimentoTurbinavel}
                            onToggle={(id) => handleToggle(id, setVertimentoTurbinavel)}
                        />
                        <SwitchCard
                            title="Volume"
                            switches={volume}
                            onToggle={(id) => handleToggle(id, setVolume)}
                        />
                    </Box>
                    
                </Stack>
            </Box>
        </Box>
    )
}

export default PlanilhaResultado;