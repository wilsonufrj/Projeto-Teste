import { SwitchCard, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllCheckedTruePlanilhas, setSelecionarPlanilhas } from "./feature/DessemSlice";
import type { PlanilhaResultadoType } from "./types/PlanilhaResultadoType";

const PlanilhaResultado = () => {
    const dispatch = useAppDispatch()
    const planilhaResultados = useAppSelector((state) => state.dessem.planilhaResultado);


    const handleToggle = (
        atributo:keyof PlanilhaResultadoType ,
        index: string,
    ) => {
        dispatch(setSelecionarPlanilhas({atributo, index}))
    };

    const verificaChecked: boolean = Object.keys(planilhaResultados).every((atributo) => planilhaResultados[atributo as keyof PlanilhaResultadoType].some(item => item.checked));

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
                    // message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => dispatch(setAllCheckedTruePlanilhas(checked))} 
                />

                <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap:'30px' }}>
                        <SwitchCard
                            title="Custo Marginal - Submercados"
                            switches={planilhaResultados.custoMarginalSubmercados}
                            onToggle={(id) => handleToggle("custoMarginalSubmercados", id)}
                        />

                        <SwitchCard
                            title="Balanço de energia - Submercados"
                            switches={planilhaResultados.balancoEnergiaSubmercado}
                            onToggle={(id) => handleToggle("balancoEnergiaSubmercado", id)}
                        />

                        <SwitchCard
                            title="Operação usinas hidráulicas"
                            switches={planilhaResultados.operacaoUsinasHidraulicas}
                            onToggle={(id) => handleToggle("operacaoUsinasHidraulicas", id)}
                        />
                    </Box>
                    
                </Stack>
            </Box>
        </Box>
    )
}

export default PlanilhaResultado;