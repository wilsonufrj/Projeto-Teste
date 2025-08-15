import { SelectOptions, SwitchLabel, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const InformacoesGerais = () => {
    const [versao, setVersao] = useState<string>();
    const versaoOptions = ['1.0.0', '1.1.0', '1.2.0', '1.3.0']

    const [tentativas, setTentativas] = useState<string>();
    const tentativasOptions = ['1', '2', '3'];

    const [viabilizarDECOMP, setViabilizarDECOMP] = useState<boolean>(false);
    const [numeroProcessadores, setNumeroProcessadores] = useState<string>("");
    const [configuracaoNos,setConfiguracaoNos] = useState<string>("")

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Informações iniciais
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifySelf: 'start', gap: '30px' }}>
                
                    <SwitchLabel
                        label="Viabilizar DECOMP"
                        checked={viabilizarDECOMP}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setViabilizarDECOMP(checked)} />

                    <SelectOptions
                        value={versao}
                        label={"Versão do DECOMP"}
                        options={versaoOptions}
                        placeholder="Mês"
                        onChange={setVersao}
                        boxOptionSx={{ width: '294px' }}
                    />
                    <SelectOptions
                        value={tentativas}
                        label={"Tentativas"}
                        options={tentativasOptions}
                        placeholder="Ano"
                        onChange={setTentativas}
                        boxOptionSx={{ width: '136px' }}
                    />
                </Box>

                <Box sx={{ display: "flex", justifySelf: 'start', gap: '60px' }}>
                    <TextField
                        sx={{ margin: 0 }}
                        label='Número de processadores'
                        value={numeroProcessadores}
                        onChange={setNumeroProcessadores}
                        inputProps={{
                            placeholder: "0",
                            style: { width: '136px' }
                        }}
                    />

                    <TextField
                        sx={{ margin: 0 }}
                        label='Configuração dos nós'
                        value={configuracaoNos}
                        onChange={setConfiguracaoNos}
                        inputProps={{
                            placeholder: "0",
                            style: { width: '136px' }
                        }}
                    />
                </Box>
            </Stack>
        </Box>)
}

export default InformacoesGerais;