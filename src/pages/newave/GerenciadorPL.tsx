import { FileUpload, OptionButton, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAlocacaoCortesFCF, setAlocacaoMemoriaEna, setArmazenamentoLocalTemporario, setComunicacaoDoisNiveis, setGrenciadorExternoProcessos, updateGerenciadorPL } from "./feature/newaveSlice";
import { fakeSendFiles } from "../../utils/utils";

const GerenciadorPL = () => {

    const dispatch = useAppDispatch();
    const gerenciadorPL = useAppSelector(state => state.newave.gerenciadorPL);

    return (
        <Box sx={{ width: '75%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Gerenciador de PL
                    </Typography>
                </Box>

                <Stack>
                    <Box>
                        <Typography sx={{ justifySelf: 'start', fontSize: '16px', fontWeight: 400, lineHeight: '180%', marginBottom: '15px' }}>
                            Gerenciador de PL
                        </Typography>
                        <FileUpload
                            files={gerenciadorPL.gerenciadorPL}
                            onFilesChange={(files) => dispatch(updateGerenciadorPL(files))}
                            sendFiles={fakeSendFiles}
                            direction="right" />
                    </Box>

                    <SwitchLabel
                        label="Utilizar gerenciador externo de processos"
                        checked={gerenciadorPL.grenciadorExternoProcessos}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => dispatch(setGrenciadorExternoProcessos(checked))} />
                    <SwitchLabel
                        label="Utilizar comunicação de dois níveis"
                        checked={gerenciadorPL.comunicacaoDoisNiveis}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => dispatch(setComunicacaoDoisNiveis(checked))} />

                    <SwitchLabel
                        label="Utilizar alocação de memória ENA"
                        checked={gerenciadorPL.alocacaoMemoriaEna}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => dispatch(setAlocacaoMemoriaEna(checked))} />

                    <SwitchLabel
                        label="Utilizar alocação de cortes FCF"
                        checked={gerenciadorPL.alocacaoCortesFCF}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => dispatch(setAlocacaoCortesFCF(checked))}
                    />


                    <Box sx={{ marginTop: '30px' }}
                    >
                        <OptionButton
                            value={gerenciadorPL.armazenamentoLocalTemporario}
                            onChange={e => dispatch(setArmazenamentoLocalTemporario(Number(e)))}
                            label="Armazenamento local temporário por"
                            labelPosition="side"
                            horizontal={true}
                            lista={[{ id: 0, descricao: 'processo' }, { id: 1, descricao: 'nó' }]}

                        />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default GerenciadorPL;