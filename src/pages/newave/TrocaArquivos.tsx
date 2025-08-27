import { AddableRows, Datepicker, FileUpload, SelectOptions } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { TrocaArquivoTypes } from "./types/TrocaArquivoTypes";
import { addTrocaArquivos, removeTrocaArquivoByIndex } from "./feature/newaveSlice";
import { fakeSendFiles, formatarDDMMYYYY } from "../../utils/utils";


const TrocaArquivos = () => {

    const dispatch = useAppDispatch()
    const trocaArquivos = useAppSelector((state) => state.newave.trocaArquivos);

    const newItem = (): TrocaArquivoTypes => ({
        arquivos: [],
        nomeArquivo: '',
        periodo: ''
    })

    const arquivos = [
        'teste1.txt',
        'teste2.txt',
        'teste3.txt'
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Troca Arquivos
                    </Typography>
                </Box>

                <AddableRows<TrocaArquivoTypes>
                    addLabel="Adicionar Troca de Arquivos"
                    value={trocaArquivos}
                    onChange={e => dispatch(addTrocaArquivos(e))}
                    itemFactory={newItem}
                    addButtonProps={{ sx: { width: '302px' } }}
                    onDelete={(_, index) => {
                        dispatch(removeTrocaArquivoByIndex(index))
                    }}
                    renderContent={({ item, index, update }) => ({
                        header: (
                            <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                <Datepicker
                                    title='Período'
                                    titlePosition="side"
                                    dateDefault={formatarDDMMYYYY(item.periodo)}
                                    onDateChange={e => {
                                        if (e instanceof Date) {
                                            update({ periodo: e.toISOString() })
                                        }
                                    }}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                    sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                />
                                <SelectOptions
                                    value={item.nomeArquivo}
                                    label={"Nome do arquivo"}
                                    options={arquivos}
                                    placeholder="Selecione o arquivo"
                                    onChange={(e) => update({nomeArquivo:e})}
                                    boxOptionSx={{ width: '581px' }}
                                />
                            </Box>
                        ),
                        body: (
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                                    Enviar arquivo
                                </Typography>
                                <FileUpload
                                    files={item.arquivos}
                                    onFilesChange={e => update({ arquivos: e })}
                                    sendFiles={fakeSendFiles}
                                />
                            </Box>
                        )
                    })}

                />
            </Stack >

        </Box >
    )
}

export default TrocaArquivos;