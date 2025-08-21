import { FileUpload, OptionButton } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material"
import { fakeSendFiles } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setInformacoes } from "./feature/informacoesGeraisSlice";

const AjusteArmazenamentoFinal = () => {

    const dispatch = useAppDispatch();
    const ajusteArmazenamentoFinal = useAppSelector(state => state.informacoesGerais.ajusteArmazenamentoFinal);


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Ajuste de armazenamento final
                    </Typography>
                </Box>

                <OptionButton
                    value={ajusteArmazenamentoFinal.informacao}
                    onChange={e=> dispatch(setInformacoes(String(e)))}
                    label="Informação"
                    labelPosition="side"
                    horizontal={true}
                    lista={[{ id: 'usih', descricao: 'Usina Hidrelétrica' },
                    { id: 'ree', descricao: 'REE' },
                    { id: 'sub', descricao: 'Submercado' }]}

                />
                <Box sx={{ marginTop: '55px', width: '70%' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                        Arquivo de fatores
                    </Typography>
                    <FileUpload sendFiles={fakeSendFiles} />
                </Box>
            </Stack>
        </Box>
    )
}

export default AjusteArmazenamentoFinal;