import { SwitchCard, SwitchLabel, type SwitchItem } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllCheckedTrue, setSelecionarPlanilhas } from "./feature/newaveSlice";
import type { PlanilhaResultadosTypes } from "./types/PlanilhaResultadoTypes";

const PlanilhaResultado = () => {
    const dispatch = useAppDispatch()
    const planilhaResultados = useAppSelector((state) => state.newave.planilhasResultados);


    const handleToggle = (
        atributo:keyof PlanilhaResultadosTypes ,
        index: string,
    ) => {
        dispatch(setSelecionarPlanilhas({atributo, index}))
    };

    const verificaChecked: boolean = Object.keys(planilhaResultados).every((atributo) => planilhaResultados[atributo as keyof PlanilhaResultadosTypes].some(item => item.checked));

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
                    checked={verificaChecked}
                    labelPlacement="start"
                    message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => dispatch(setAllCheckedTrue(checked))} />

                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SwitchCard
                            title="Despacho de Usina GNL"
                            switches={planilhaResultados.despachoUsinasGNL}
                            onToggle={(id) => handleToggle("despachoUsinasGNL", id)}
                        />

                        <SwitchCard
                            title="Custo Marginal de Operacao"
                            switches={planilhaResultados.custoMarginalOperacao}
                            onToggle={(id) => handleToggle("custoMarginalOperacao",id)}
                        //contentSx={{ justifyContent: 'flex-start', alignContent: 'flex-start' }}
                        />

                        <SwitchCard
                            title="Défict de Energia"
                            switches={planilhaResultados.defictEnergia}
                            onToggle={(id) => handleToggle("defictEnergia", id)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Parcela Controlável da ENA"
                            switches={planilhaResultados.parcelaControlavelENA}
                            onToggle={(id) => handleToggle("parcelaControlavelENA",id)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Vertimento Controlável"
                            switches={planilhaResultados.vertimentoControlavel}
                            onToggle={(id) => handleToggle("vertimentoControlavel", id)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Geração Hidráulica"
                            switches={planilhaResultados.geracaoHidraulica}
                            onToggle={(id) => handleToggle("geracaoHidraulica", id)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SwitchCard
                            title="Geração Térmica"
                            switches={planilhaResultados.geracaoTermica}
                            onToggle={(id) => handleToggle("geracaoTermica", id)}
                        />
                        <SwitchCard
                            title="Intercâmbio entre Subsistemas"
                            switches={planilhaResultados.intercambioSubsistema}
                            onToggle={(id) => handleToggle("intercambioSubsistema", id)}
                        />
                        <SwitchCard
                            title="Mercado Líquido"
                            switches={planilhaResultados.mercadoLiquido}
                            onToggle={(id) => handleToggle("mercadoLiquido", id)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchCard
                            title="Vertimento Turbinavel"
                            switches={planilhaResultados.vertimentoTurbinavel}
                            onToggle={(id) => handleToggle("vertimentoTurbinavel", id)}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default PlanilhaResultado;