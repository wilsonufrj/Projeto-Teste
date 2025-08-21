import { Grid2 } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material"
import { useState } from "react";
import {
    CustomBoxWithArrow,
    Datepicker,
    FileUpload,
    OptionButton,
    SelectOptions,
    SwitchLabel
} from "@cepel/cepel-react-components";
import { fakeSendFiles, formatarDDMMYYYY, months, revisoes, years } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    setAlterarVolume,
    setAlterarVolumeDecompPartida,
    setAnoFimSemanal,
    setDataReferencia,
    setMesFimSemanal,
    setRevisaoFim,
    setRodarDecompPartida,
    setRodarGevazpPartida
} from "./feature/informacoesGeraisSlice";

const EncadeamentoSemanal = () => {
    const dispatch = useAppDispatch();
    const encadeamentoSemanal = useAppSelector(state => state.informacoesGerais.encadeamentoSemanal);

    const [anchorElAlteraVolumeDecompPartida, setAnchorElAlteraVolumeDecompPartida] = useState<HTMLElement | null >(null);


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Encadeamento semanal
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center' }}>
                    <Box >
                        <SelectOptions
                            value={encadeamentoSemanal.mesFimSemanal}
                            label={"Data fim semanal"}
                            options={months}
                            placeholder="Mês"
                            onChange={(e) => dispatch(setMesFimSemanal(e))}
                            boxOptionSx={{ width: '158px' }}
                        />
                        <SelectOptions
                            value={encadeamentoSemanal.anoFimSemanal}
                            label={""}
                            options={years}
                            placeholder="Ano"
                            onChange={(e) => dispatch(setAnoFimSemanal(e))}
                            boxOptionSx={{ width: '158px' }}
                        />
                    </Box>
                    <SelectOptions
                        sx={{ marginLeft: '100px' }}
                        value={encadeamentoSemanal.revisaoFim}
                        label={"Revisão de fim"}
                        options={revisoes}
                        placeholder="RV 0"
                        onChange={(e) => dispatch(setRevisaoFim(e))}
                        boxOptionSx={{ width: '119px' }}
                    />
                </Box>

                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 2, width: '100%' }}>
                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Rodar DECOMP  de partida"}
                            checked={encadeamentoSemanal.rodarDecompPartida}
                            onChange={(_, checked) => dispatch(setRodarDecompPartida(checked))}
                            message="Receba alertas importantes."
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Altera volume DECOMP de partida"}
                            checked={encadeamentoSemanal.alterarVolumeDecompPartida}
                            onChange={(_, checked) => dispatch(setAlterarVolumeDecompPartida(checked))}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElAlteraVolumeDecompPartida(el)}
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Rodar GEVAZP de partida"}
                            checked={encadeamentoSemanal.rodarGevazpPartida}
                            onChange={(_, checked) => dispatch(setRodarGevazpPartida(checked))}
                            message="Receba alertas importantes."
                        />
                    </Grid2>

                    {encadeamentoSemanal.alterarVolumeDecompPartida && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 12" }, width: "100%" }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElAlteraVolumeDecompPartida }}
                                style={{ minWidth: 280, width: "100%" }}
                                contentAlignment='start'
                            >
                                <Stack>
                                    <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                        <OptionButton
                                            sx={{ marginTop: '7px' }}
                                            value={encadeamentoSemanal.alterarVolume}
                                            onChange={e=>dispatch(setAlterarVolume(Number(e)))}
                                            label="Alterar volume"
                                            labelPosition="side"
                                            horizontal={true}
                                            lista={[{ id: 0, descricao: 'inicial' }, { id: 1, descricao: 'final' }]}

                                        />

                                        <Datepicker
                                            title='Data de referência'
                                            titlePosition="side"
                                            dateDefault={formatarDDMMYYYY(encadeamentoSemanal.dataReferencia)}
                                            onDateChange={(e)=>{
                                                if(e instanceof Date){
                                                    dispatch(setDataReferencia(e.toISOString()))
                                                }
                                            }}
                                            minDate={new Date(2000, 0, 1)}
                                            maxDate={new Date(2025, 11, 31)}
                                            message="Selecione uma data válida dentro do período."
                                            sx={{ alignContent: 'center', paddingTop: 0, marginLeft: '60px' }}
                                        />

                                    </Box>
                                    <Box sx={{ marginTop: '55px', width: '100%' }}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                                            Arquivo de recuperação de volumes
                                        </Typography>
                                        <FileUpload sendFiles={fakeSendFiles}/>
                                    </Box>
                                </Stack>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}

                </Grid2>

                <Box sx={{ marginTop: '37px', width: '70%' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                        Revisão dos PREVS de partida
                    </Typography>
                    <FileUpload sendFiles={fakeSendFiles}/>
                </Box>

            </Stack >
        </Box >
    )
}

export default EncadeamentoSemanal;