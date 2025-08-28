import { FileUpload, OptionButton, Tab, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTipoMensal } from "./feature/gevazpSlice";

const InformacoesPrevisoes = () => {

    const dispatch = useAppDispatch()
    const informacoesPrevisoes = useAppSelector(state=> state.gevazp.informacoesPrevisoes)

    const mensal = () => {
        return (
            <Stack gap={'50px'}>
                <OptionButton
                    value={informacoesPrevisoes.tipoMensal}
                    sx={{ marginTop: '60px' }}
                    onChange={e=> dispatch(setTipoMensal(Number(e)))}
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

     const semanal = () => {
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

    const tabsItens = [
        { label: "Mensais", component: mensal() },
        { label: "Semanais", component:semanal() }
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