import { AddableRows, CustomBoxWithArrow, Datepicker, SelectOptions, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Grid2, Stack, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    addReexecucao,
    removeReexecucaoByIndex,
    setDataReferenciaRestart,
    setPartidaQuente,
    setReexecucaoNaoEncadeada,
    setRevisaoPartidaQuente
} from "./feature/informacoesGeraisSlice";
import { useState } from "react";
import { formatarDDMMYYYY, revisoes } from "../../utils/utils";
import type { Reexecucao } from "./types/EstudoRestartType";


const EstudoRestart = () => {
    const dispatch = useAppDispatch();
    const estudoRestart = useAppSelector(state => state.informacoesGerais.estudoRestart);

    const [anchorElPartidaQuente, setAnchorElPartidaQuente] = useState<HTMLElement | null>(null);
    const [anchorElReexecucaoNaoEncadeada, setAnchorElReexecucaoNaoEncadeada] = useState<HTMLElement | null>(null);


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Estudo de Restart
                    </Typography>
                </Box>

                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Partida quente"}
                            checked={estudoRestart.partidaQuente}
                            onChange={(_, checked) => dispatch(setPartidaQuente(checked))}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElPartidaQuente(el)}
                            disabled={estudoRestart.reexecucaoNaoEncadeada}
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Reexecução não encadeada"}
                            checked={estudoRestart.reexecucaoNaoEncadeada}
                            onChange={(_, checked) => dispatch(setReexecucaoNaoEncadeada(checked))}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElReexecucaoNaoEncadeada(el)}
                            disabled={estudoRestart.partidaQuente}
                        />
                    </Grid2>

                    {estudoRestart.partidaQuente && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 2" } }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElPartidaQuente }}
                                style={{ minWidth: 280, width: '1147px' }}
                                contentAlignment='start'
                            >
                                <Stack>
                                    <Box sx={{ display: 'flex', alignContent: 'center' }}>

                                        <Datepicker
                                            title='Data de referência'
                                            titlePosition="side"
                                            dateDefault={formatarDDMMYYYY(estudoRestart.dataReferencia)}
                                            onDateChange={(e) => {
                                                if (e instanceof Date) {
                                                    dispatch(setDataReferenciaRestart(e.toISOString()))
                                                }
                                            }}
                                            minDate={new Date(2000, 0, 1)}
                                            maxDate={new Date(2025, 11, 31)}
                                            message="Selecione uma data válida dentro do período."
                                            sx={{ alignContent: 'center', paddingTop: 0, marginLeft: '60px' }}
                                        />

                                        <SelectOptions
                                            value={estudoRestart.revisaoPartidaQuente}
                                            label={"Revisão partida quente"}
                                            options={revisoes}
                                            placeholder="RV 0"
                                            onChange={e => dispatch(setRevisaoPartidaQuente(e))}
                                            boxOptionSx={{ width: '158px' }}
                                        />
                                    </Box>
                                </Stack>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}

                    {estudoRestart.reexecucaoNaoEncadeada && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 2", width: '100%' } }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElReexecucaoNaoEncadeada }}
                                style={{ minWidth: 280, width: '1147px' }}
                                contentAlignment='start'
                            >
                                <Box sx={{ width: '100%' }}>

                                    <AddableRows<Reexecucao>
                                        addLabel="Adicionar Reexecução"
                                        value={estudoRestart.reexecucoes}
                                        onChange={e => dispatch(addReexecucao(e))}
                                        itemFactory={() => ({ dataInicio: '', dataFim: '' } as Reexecucao)}
                                        addButtonProps={{ sx: { width: '226px' } }}
                                        onDelete={(_, index) => {
                                            dispatch(removeReexecucaoByIndex(index))
                                        }}
                                        renderContent={({ item, index, update }) => ({
                                            header: (
                                                <Stack direction={'row'} gap={'34px'} sx={{ display: 'flex', alignContent: 'center' }}>
                                                    <Datepicker
                                                        title='Date início'
                                                        titlePosition="side"
                                                        dateDefault={formatarDDMMYYYY(item.dataInicio)}
                                                        onDateChange={e => update({ dataInicio: e?.toISOString() })}
                                                        minDate={new Date(2000, 0, 1)}
                                                        maxDate={new Date(2025, 11, 31)}
                                                        message="Selecione uma data válida dentro do período."
                                                        sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                                    />
                                                    <Datepicker
                                                        title='Data fim'
                                                        titlePosition="side"
                                                        dateDefault={formatarDDMMYYYY(item.dataFim)}
                                                        onDateChange={e => update({ dataFim: e?.toISOString() })}
                                                        minDate={new Date(2000, 0, 1)}
                                                        maxDate={new Date(2025, 11, 31)}
                                                        message="Selecione uma data válida dentro do período."
                                                        sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                                    />
                                                </Stack>
                                            )
                                        })}
                                    />
                                </Box>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}
                </Grid2>
            </Stack>
        </Box>
    )
}

export default EstudoRestart;