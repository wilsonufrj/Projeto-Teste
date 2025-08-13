import { Box, Stack, Typography } from "@mui/material";
import FileUpload from "../components/FileUpload/FileUpload";
import { useState } from "react";
import SwitchLabel from "../components/SwitchLabel/SwitchLabel";
import { OptionButton } from "../components/OptionButton/OptionButton";

const GerenciadorPL = () => {

    const [gerenciadorExternoProcesso, setGerenciadorExternoProcesso] = useState<boolean>(false);
    const [comunicacaoDoisNiveis, setComunicacaoDoisNiveis] = useState<boolean>(false);

    const [alocacaoMemoriaENA, setAlocacaoMemoriaENA] = useState<boolean>(false);
    const [alocacaoMemoriaCortes, setaAlocacaoMemoriaCortes] = useState<boolean>(false);

    const [number, setNumber] = useState<number>(0);

    return (
        <Box sx={{ width: '75%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '39px' }}>
                        Gerenciador de PL
                    </Typography>
                </Box>

                <Stack>
                    <Box>
                        <Typography sx={{ justifySelf: 'start', fontSize: '16px', fontWeight: 400, lineHeight: '180%', marginBottom: '15px' }}>
                            Gerenciador de PL
                        </Typography>
                        <FileUpload direction="right" />
                    </Box>

                    <SwitchLabel
                        label="Utilizar gerenciador externo de processos"
                        checked={gerenciadorExternoProcesso}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setGerenciadorExternoProcesso(checked)} />
                    <SwitchLabel
                        label="Utilizar comunicação de dois níveis"
                        checked={comunicacaoDoisNiveis}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setComunicacaoDoisNiveis(checked)} />

                    <SwitchLabel
                        label="Utilizar alocação de memória ENA"
                        checked={alocacaoMemoriaENA}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setAlocacaoMemoriaENA(checked)} />

                    <SwitchLabel
                        label="Utilizar alocação de cortes FCF"
                        checked={alocacaoMemoriaCortes}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setaAlocacaoMemoriaCortes(checked)}
                    />


                    <Box sx={{ marginTop: '60px' }}
                    >
                        <OptionButton
                            value={number}
                            onChange={setNumber}
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