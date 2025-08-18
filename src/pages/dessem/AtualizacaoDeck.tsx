import { SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const AtualizacaoDeck = () => {

    const [selecionarTodas, setSelecionarTodas] = useState<boolean>(false);
    const [atualizaDP, setAtualizaDP] = useState<boolean>(false);
    const [atualizaIA, setAtualizaIA] = useState<boolean>(false);
    const [atualizaDeflant, setAtualizaDeflant] = useState<boolean>(false);


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Atualização Deck
                    </Typography>
                </Box>

                <Box>
                    <SwitchLabel
                        label="Selecionar todas"
                        checked={selecionarTodas}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setSelecionarTodas(checked)} />

                    <Stack direction={"row"} gap={'30px'}>
                        <SwitchLabel
                            label="Atualiza DP"
                            checked={atualizaDP}
                            labelPlacement="start"
                            message="Switch para diminuir automaticamente o horizonte de estudo"
                            onChange={(_event, checked) => setAtualizaDP(checked)} />
                        <SwitchLabel
                            label="Atualiza IA"
                            checked={atualizaIA}
                            labelPlacement="start"
                            message="Switch para diminuir automaticamente o horizonte de estudo"
                            onChange={(_event, checked) => setAtualizaIA(checked)} />
                        <SwitchLabel
                            label="Atualiza Deflant"
                            checked={atualizaDeflant}
                            labelPlacement="start"
                            message="Switch para diminuir automaticamente o horizonte de estudo"
                            onChange={(_event, checked) => setAtualizaDeflant(checked)} />

                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default AtualizacaoDeck;