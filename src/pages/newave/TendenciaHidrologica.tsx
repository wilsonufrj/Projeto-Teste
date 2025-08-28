import { SwitchLabel, OptionButton, Datepicker } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDataInicioPorPosto, setTipoVazpast, setUtilizacaoVazpast } from "./feature/newaveSlice";
import { formatarDDMMYYYY } from "../../utils/utils";

const TendenciaHidrologia = () => {
    const dispatch = useAppDispatch();
    const tendenciaHidrologica = useAppSelector(state => state.newave.tendenciaHidrologica)
    return (
        <Box sx={{ width: '100%', marginTop: '50px' }}>
            <Box sx={{ display: "flex", justifySelf: 'start', marginBottom: '60px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%" }}>
                    Tendencia hidrológica
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: "120%", marginBottom: '19px' }}>
                    Tipo Vazpast
                </Typography>
                <Stack sx={{ gap: '10px' }}>
                    <Box sx={{ display: 'flex', gap: '30px', alignContent: 'center' }}>
                        <OptionButton
                            value={tendenciaHidrologica.tipoVazpast}
                            onChange={e => dispatch(setTipoVazpast(Number(e)))}
                            labelPosition="side"
                            horizontal={true}
                            sx={{ margin: '0px' }}
                            lista={[{ id: 0, descricao: 'Todo horizonte ree' },
                            { id: 1, descricao: 'Horizonte por posto' },
                            { id: 2, descricao: 'Horizonte parcial' }]}
                        />
                        <Datepicker
                            disabled={tendenciaHidrologica.tipoVazpast !== 2}
                            title='Data de início por posto'
                            titlePosition="side"
                            dateDefault={formatarDDMMYYYY(tendenciaHidrologica.dataInicioPorPosto)}
                            onDateChange={(e) => {
                                if (e instanceof Date) {
                                    dispatch(setDataInicioPorPosto(e.toISOString()))
                                }
                            }}
                            minDate={new Date(2000, 0, 1)}
                            maxDate={new Date(2025, 11, 31)}
                            message="Selecione uma data válida dentro do período."
                            sx={{ alignContent: 'start', paddingTop: 0 }}
                        />
                    </Box>
                    <OptionButton
                        value={tendenciaHidrologica.utilizaVazpast}
                        onChange={e => dispatch(setUtilizacaoVazpast(Number(e)))}
                        label="Utiliza Vazpast gerado pelo"
                        labelPosition="side"
                        horizontal={true}
                        lista={[{ id: 0, descricao: 'Gevazp' }, { id: 1, descricao: 'PLD Pro' }]}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export default TendenciaHidrologia;