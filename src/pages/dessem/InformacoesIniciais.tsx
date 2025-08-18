import { SelectOptions, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";


const InformacoesIniciais = () => {

    const [versao, setVersao] = useState<string>("");
    const versaoOptions = ['1.0.0', '1.1.0', '1.2.0', '1.3.0']

     const [tentativas, setTentativas] = useState<string>("");
    const tentativasOptions = ['1', '2', '3'];

        const [ativaCrossover, setAtivaCrossover] = useState<boolean>(false);

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Informações iniciais
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifySelf: 'start', gap: '30px' }}>
                    <SelectOptions
                        value={versao}
                        label={"Versão do DECOMP"}
                        options={versaoOptions}
                        placeholder="Selecione a versão"
                        onChange={setVersao}
                        boxOptionSx={{ width: '294px' }}

                    />
                    <SelectOptions
                        value={tentativas}
                        label={"Tentativas"}
                        options={tentativasOptions}
                        placeholder="0"
                        onChange={setTentativas}
                        boxOptionSx={{ width: '201px' }}
                    />
                </Box>
                <SwitchLabel
                    label="Ativa Crossover"
                    checked={ativaCrossover}
                    labelPlacement="start"
                    message="Switch para diminuir automaticamente o horizonte de estudo"
                    onChange={(_event, checked) => setAtivaCrossover(checked)} />
            </Stack>
        </Box>
    )
}

export default InformacoesIniciais;