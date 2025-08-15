import { FileUpload, OptionButton, Tab, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Mensais = () => {
    const [number, setNumber] = useState<number>(0);
    const [nomeArquivo, setNomeArquivo] = useState<string>("");
    return (
        <Stack gap={'50px'}>
            <OptionButton
                value={number}
                sx={{ marginTop: '60px' }}
                onChange={setNumber}
                label="Tipo"
                labelPosition="side"
                horizontal={true}
                lista={[{ id: 0, descricao: 'informado' },
                { id: 1, descricao: 'derivado da ENA' },
                ]}
            />

            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <TextField
                    sx={{ margin: 0 }}
                    label='Arquivo'
                    value={nomeArquivo}
                    onChange={setNomeArquivo}
                    inputProps={{
                        placeholder: "Selecione o arquivo",
                        style: { width: '498px' }
                    }}
                />
            </Box>
            <Box sx={{ marginTop: '50px', width: '70%' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                    Enviar arquivo
                </Typography>
                <FileUpload />
            </Box>

        </Stack>
    )
}

const Semanais = () => {
    const [number, setNumber] = useState<number>(0);
    const [nomeArquivo, setNomeArquivo] = useState<string>("");

    return (
        <Stack gap={'50px'}>
            <OptionButton
                value={number}
                sx={{ marginTop: '60px' }}
                onChange={setNumber}
                label="Tipo"
                labelPosition="side"
                horizontal={true}
                lista={[{ id: 0, descricao: 'informado' },
                { id: 1, descricao: 'derivado da ENA' },
                ]}
            />

            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <TextField
                    sx={{ margin: 0 }}
                    label='Arquivo'
                    value={nomeArquivo}
                    onChange={setNomeArquivo}
                    inputProps={{
                        placeholder: "Selecione o arquivo",
                        style: { width: '498px' }
                    }}
                />
            </Box>
            <Box sx={{ marginTop: '50px', width: '70%' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                    Enviar arquivo
                </Typography>
                <FileUpload />
            </Box>

        </Stack>
    )
}

const InformacoesPrevisoes = () => {

    const tabsItens = [
        { label: "Mensais", component: <Mensais /> },
        { label: "Semanais", component: <Semanais /> }
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Informações de Previsões
                    </Typography>
                </Box>

                <Tab tabList={tabsItens} />
            </Stack>
        </Box>
    )
}

export default InformacoesPrevisoes;