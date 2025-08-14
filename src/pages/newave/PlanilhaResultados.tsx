import { SwitchCard, SwitchLabel, type SwitchItem } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const PlanilhaResultado = () => {
    const [selecionarTodas, setSelecionarTodas] = useState<boolean>(false);
    const [despachoUsinasGNL, setDespachoUsinaGNL] = useState<SwitchItem[]>([
        { id: '1', label: 'BGNL001', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'BGNL002', checked: true, message: 'Informações planilha 2' }
    ]);

    const [custoMarginalOperacao, setCustoMarginalOperacao] = useState<SwitchItem[]>([
        { id: '1', label: 'CMARG', checked: true, message: 'Informações planilha 1' },
    ]);

    const [defictEnergia, setDefictEnergia] = useState<SwitchItem[]>([
        { id: '1', label: 'DEFP001', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'DEFP001', checked: true, message: 'Informações planilha 2' }
    ]);

    const [parcelaControlavelENA, setParcelaControlavelENA] = useState<SwitchItem[]>([
        { id: '1', label: 'EAF', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'EAFB', checked: true, message: 'Informações planilha 2' },
        { id: '3', label: 'EAFBSIN', checked: true, message: 'Informações planilha 2' },
        { id: '4', label: 'EAFM', checked: true, message: 'Informações planilha 2' },
        { id: '5', label: 'EAFMSIN', checked: true, message: 'Informações planilha 2' },

    ]);

    const [vertimentoControlavel, setVertimentoControlavel] = useState<SwitchItem[]>([
        { id: '1', label: 'EVERT', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'EVERTM', checked: true, message: 'Informações planilha 2' },
        { id: '3', label: 'EVERTSIN', checked: true, message: 'Informações planilha 2' },
    ]);

    const [geraçãoHidraulica, setGeracaoHidraulica] = useState<SwitchItem[]>([
        { id: '1', label: 'GHIDR', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'GHIDRM', checked: true, message: 'Informações planilha 2' },
        { id: '3', label: 'GHIDRSIN', checked: true, message: 'Informações planilha 2' },
        { id: '4', label: 'GHTOT', checked: true, message: 'Informações planilha 2' },
        { id: '5', label: 'GHTOTM', checked: true, message: 'Informações planilha 2' },
        { id: '6', label: 'GHTOTSIN', checked: true, message: 'Informações planilha 2' },

    ]);

    const [geracaoTerminca, setGeracaoTermica] = useState<SwitchItem[]>([
        { id: '1', label: 'GTTOT', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'GTTOTSIN', checked: true, message: 'Informações planilha 2' },
    ]);

    const [intercambioSustistemas, setIntercambioSubsistemas] = useState<SwitchItem[]>([
        { id: '1', label: 'INT', checked: true, message: 'Informações planilha 1' }

    ]);

    const [mercadoLiquido, setMercadoLiquido] = useState<SwitchItem[]>([
        { id: '1', label: 'MERCL', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'CMERCLSIN', checked: true, message: 'Informações planilha 2' }
    ]);

    const [vertimentoTurbinavel, setVertimentoTurbinavel] = useState<SwitchItem[]>([
        { id: '1', label: 'VERTURBM', checked: true, message: 'Informações planilha 1' },
        { id: '2', label: 'VERTURBNW', checked: true, message: 'Informações planilha 2' },
        { id: '2', label: 'VERTURBSIN', checked: true, message: 'Informações planilha 2' }
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

                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SwitchCard
                            title="Despacho de Usina GNL"
                            switches={despachoUsinasGNL}
                            onToggle={(id) => handleToggle(id, setDespachoUsinaGNL)}
                        />

                        <SwitchCard
                            title="Custo Marginal de Operacao"
                            switches={custoMarginalOperacao}
                            onToggle={(id) => handleToggle(id, setCustoMarginalOperacao)}
                        //contentSx={{ justifyContent: 'flex-start', alignContent: 'flex-start' }}
                        />

                        <SwitchCard
                            title="Défict de Energia"
                            switches={defictEnergia}
                            onToggle={(id) => handleToggle(id, setDefictEnergia)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Parcela Controlável da ENA"
                            switches={parcelaControlavelENA}
                            onToggle={(id) => handleToggle(id, setParcelaControlavelENA)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Vertimento Controlável"
                            switches={vertimentoControlavel}
                            onToggle={(id) => handleToggle(id, setVertimentoControlavel)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Geração Hidráulica"
                            switches={geraçãoHidraulica}
                            onToggle={(id) => handleToggle(id, setGeracaoHidraulica)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SwitchCard
                            title="Geração Térmica"
                            switches={geracaoTerminca}
                            onToggle={(id) => handleToggle(id, setGeracaoTermica)}
                        />
                        <SwitchCard
                            title="Intercâmbio entre Subsistemas"
                            switches={intercambioSustistemas}
                            onToggle={(id) => handleToggle(id, setIntercambioSubsistemas)}
                        />
                        <SwitchCard
                            title="Mercado Líquido"
                            switches={mercadoLiquido}
                            onToggle={(id) => handleToggle(id, setMercadoLiquido)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Vertimento Turbinavel"
                            switches={vertimentoTurbinavel}
                            onToggle={(id) => handleToggle(id, setVertimentoTurbinavel)}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default PlanilhaResultado;