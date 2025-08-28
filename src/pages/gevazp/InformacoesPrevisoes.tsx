import { FileUpload, OptionButton, Tab, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setNomeArquivoMensal, setNomeArquivoSemanal, setTipoMensal, setTipoSemanal, updateArquivoMensal, updateArquivoSemanal } from "./feature/gevazpSlice";
import { fakeSendFiles } from "../../utils/utils";

const InformacoesPrevisoes = () => {

    const dispatch = useAppDispatch()
    const informacoesPrevisoes = useAppSelector(state => state.gevazp.informacoesPrevisoes)

    const mensal = () => {
        return (
            <Stack gap={'50px'}>
                <OptionButton
                    value={informacoesPrevisoes.tipoMensal}
                    sx={{ marginTop: '60px' }}
                    onChange={e => dispatch(setTipoMensal(Number(e)))}
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
                        value={informacoesPrevisoes.nomeArquivoMensal}
                        onChange={e => dispatch(setNomeArquivoMensal(e))}
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
                    <FileUpload
                        files={informacoesPrevisoes.arquivoMensal}
                        onFilesChange={files => dispatch(updateArquivoMensal(files))}
                        sendFiles={fakeSendFiles}
                    />
                </Box>

            </Stack>
        )
    }

    const semanal = () => {
        return (
            <Stack gap={'50px'}>
                <OptionButton
                    value={informacoesPrevisoes.tipoSemanal}
                    sx={{ marginTop: '60px' }}
                    onChange={e => dispatch(setTipoSemanal(Number(e)))}
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
                        value={informacoesPrevisoes.nomeArquivoSemanal}
                        onChange={e => dispatch(setNomeArquivoSemanal(e))}
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
                    <FileUpload
                        files={informacoesPrevisoes.arquivoSemanal}
                        onFilesChange={files => dispatch(updateArquivoSemanal(files))}
                        sendFiles={fakeSendFiles}
                    />
                </Box>

            </Stack>
        )
    }

    const tabsItens = [
        { label: "Mensais", component: mensal() },
        { label: "Semanais", component: semanal() }
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