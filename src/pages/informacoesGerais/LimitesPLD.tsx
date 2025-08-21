import { AddableRows, Datepicker, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { LimitesPLDTypes } from "./types/LimitesPLDType";
import { formatarDDMMYYYY } from "../../utils/utils";
import { addLimitesPLD, removeLimitePLDByIndex } from "./feature/informacoesGeraisSlice";


const LimitesPLD = () => {
    const dispatch = useAppDispatch();
    const limitesPLD = useAppSelector(state => state.informacoesGerais.limitesPLD);

    const newLimite = ():LimitesPLDTypes=>({
        periodo:'',
        maximo:'',
        minimo:''
    })

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Limites PLD
                    </Typography>
                </Box>
            </Stack>

            <AddableRows<LimitesPLDTypes>
                addLabel="Adicionar Limites"
                value={limitesPLD}
                onChange={e=> dispatch(addLimitesPLD(e))}
                itemFactory={newLimite}
                addButtonProps={{ sx: { width: '302px' } }}
                onDelete={(_, index) => {
                    dispatch(removeLimitePLDByIndex(index))
                }}
                renderContent={({ item, index,update}) => ({
                    header: (
                        <Stack direction={'row'} gap={'34px'} sx={{ display: 'flex', alignContent: 'center' }}>
                            <Datepicker
                                title='Período'
                                titlePosition="side"
                                dateDefault={formatarDDMMYYYY(item.periodo)}
                                onDateChange={e => {
                                    if (e instanceof Date) {
                                        update({periodo:e.toISOString()})
                                    }
                                }}
                                minDate={new Date(2000, 0, 1)}
                                maxDate={new Date(2025, 11, 31)}
                                message="Selecione uma data válida dentro do período."
                                sx={{ alignContent: 'center', paddingTop: 0.3 }}
                            />
                            <TextField
                                label='Mínimo'
                                value={item.minimo}
                                onChange={e=> update({minimo:e})}
                                inputProps={{ sx: { width: '160px' } }}
                            />
                            <TextField
                                label='Máximo'
                                value={item.maximo}
                                onChange={e=> update({maximo:e})}
                                inputProps={{ sx: { width: '160px' } }}
                            />
                        </Stack>
                    )
                })}

            />

        </Box>
    )
}

export default LimitesPLD;