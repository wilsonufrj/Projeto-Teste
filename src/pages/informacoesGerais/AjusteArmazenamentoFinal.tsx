import { FileUpload, OptionButton } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material"
import { useState } from "react";

const AjusteArmazenamentoFinal = () => {

    const [number, setNumber] = useState<number>(0);


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Ajuste de armazenamento final
                    </Typography>
                </Box>

                <OptionButton
                    value={number}
                    onChange={setNumber}
                    label="Informação"
                    labelPosition="side"
                    horizontal={true}
                    lista={[{ id: 0, descricao: 'Usina Hidrelétrica' },
                    { id: 1, descricao: 'REE' },
                    { id: 2, descricao: 'Submercado' }]}

                />
                <Box sx={{ marginTop: '55px', width: '70%' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                        Arquivo de fatores
                    </Typography>
                    <FileUpload />
                </Box>
            </Stack>
        </Box>
    )
}

export default AjusteArmazenamentoFinal;