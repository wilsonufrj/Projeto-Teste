import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SwitchLabel from "../components/SwitchLabel/SwitchLabel";
import SelectOptions from "../components/SelectOptions/SelectOptions";
import TextField from "../components/TextField/TextField";

const InformacoesIniciais = () => {

    const [versao, setVersao] = useState<string>("");
    const [numeroProcessadores, setNumeroProcessadores] = useState<string>("");
    const [configuracaoNos, setConfiguracaoNos] = useState<string>("");

    const [primeiraSimulacao, setPrimeiraSimulacao] = useState("");
    const [segundaSimulacao, setSegundaSimulacao] = useState("");

    const [diminuicaoAutomaticaHorizonte, setDiminuicaoAutomaticaHorizonte] = useState<boolean>(false);

    const options = ['1.0.0', '1.1.0', '1.2.0', '1.3.0']

    return (
        <Box sx={{ width: '75%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '39px' }}>Informações iniciais</Typography>
                </Box>
                <Box sx={{ display: "flex", justifySelf: 'start' }}
                >
                    <SelectOptions
                        value={versao}
                        label={"Versão do NEWAVE"}
                        options={options}
                        placeholder="Selecione a versão"
                        onChange={setVersao}
                        boxOptionSx={{ width: '294px' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="Número de processadores" value={numeroProcessadores} onChange={setNumeroProcessadores} ></TextField>
                    <TextField label="Configuração dos nós" value={configuracaoNos} onChange={setConfiguracaoNos} ></TextField>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="1a simulacao da S. Sint" value={primeiraSimulacao} onChange={setPrimeiraSimulacao} ></TextField>
                    <TextField label="2a simulacao da S. Sint" value={segundaSimulacao} onChange={setSegundaSimulacao} ></TextField>
                </Box>
                <SwitchLabel
                    label="Diminuição automática do horizonte"
                    checked={diminuicaoAutomaticaHorizonte}
                    labelPlacement="start"
                    message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => setDiminuicaoAutomaticaHorizonte(checked)} />
            </Stack>
        </Box>
    );
}

export default InformacoesIniciais;