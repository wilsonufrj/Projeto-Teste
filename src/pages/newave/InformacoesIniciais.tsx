import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SelectOptions, SwitchLabel, TextField } from "@cepel/cepel-react-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { versions } from "../../utils/utils";
import { setConfiguracaoNos, setDiminuicaoAutomaticaHorizonte, setNumeroProcessadores, setPrimeiraSimulacao, setSegundaSimulacao, setVersao } from "./feature/newaveSlice";

const InformacoesIniciais = () => {

    const dispatch = useAppDispatch();
    const informacoesIniciais = useAppSelector(state => state.newave.informacoesIniciais);

    return (
        <Box sx={{ width: '75%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>Informações iniciais</Typography>
                </Box>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <SelectOptions
                        value={informacoesIniciais.versao}
                        label={"Versão do NEWAVE"}
                        options={versions}
                        placeholder="Selecione a versão"
                        onChange={(e) => dispatch(setVersao(e))}
                        boxOptionSx={{ width: '294px' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="Número de processadores"
                        value={informacoesIniciais.numeroProcessadores}
                        onChange={(e) => dispatch(setNumeroProcessadores(e))} />

                    <TextField label="Configuração dos nós"
                        value={informacoesIniciais.configuracaoNos}
                        onChange={e => dispatch(setConfiguracaoNos(e))} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="1a simulacao da S. Sint"
                        value={informacoesIniciais.primeiraSimulacao}
                        onChange={e => dispatch(setPrimeiraSimulacao(e))} />

                    <TextField label="2a simulacao da S. Sint"
                        value={informacoesIniciais.segundaSimulacao}
                        onChange={e => dispatch(setSegundaSimulacao(e))} />
                </Box>
                <SwitchLabel
                    label="Diminuição automática do horizonte"
                    checked={informacoesIniciais.diminuicaoAutomaticaHorizonte}
                    labelPlacement="start"
                    message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => dispatch(setDiminuicaoAutomaticaHorizonte(checked))} />
            </Stack>
        </Box>
    );
}

export default InformacoesIniciais;