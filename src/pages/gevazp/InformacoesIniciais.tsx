import { SelectOptions } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";


const InformacoesIniciais = () => {
    const [versao, setVersao] = useState<string>("");
    const options = ['1.0.0', '1.1.0', '1.2.0', '1.3.0']


    return (
        <Box sx={{ width: '75%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Informações iniciais
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <SelectOptions
                        value={versao}
                        label={"Versão do GEVAZP"}
                        options={options}
                        placeholder="Selecione a versão"
                        onChange={setVersao}
                        boxOptionSx={{ width: '294px' }}
                    />
                </Box>
            </Stack>
        </Box>
    );
}

export default InformacoesIniciais