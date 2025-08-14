import { Box, Stack, Typography } from "@mui/material";
import SwitchLabel from "../components/SwitchLabel/SwitchLabel";
import { useState } from "react";
import TextField from "../components/TextField/TextField";
import { OptionButton } from "../components/OptionButton/OptionButton";
import { DatePicker } from "../components/DatePickers/Datepicker";

const TendenciaHidrologia = () => {

    const [todoHorizonte, setTodoHorizonte] = useState<boolean>(false);
    const [tipoVazpast, setTipoVazpast] = useState<boolean>(false);
    //const [todoHorizonte, setTodoHorizonte] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(0);
    const [date, setDate] = useState<Date>();




    return (
        <Box sx={{ width: '75%', marginTop: '50px' }}>
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
                    <SwitchLabel
                        label="Todo horizonte ree"
                        checked={todoHorizonte}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setTodoHorizonte(checked)} />

                    <SwitchLabel
                        label="Tipo Vaspast"
                        checked={tipoVazpast}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setTipoVazpast(checked)} />

                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <SwitchLabel
                            label="Tipo Vaspast"
                            checked={tipoVazpast}
                            labelPlacement="start"
                            message="Switch para diminuir automaticamente o horizonte de estudo"
                            onChange={(_event, checked) => setTipoVazpast(checked)} />

                        <DatePicker
                            title='Data de início'
                            titlePosition="side"
                            dateDefault={"02/03/2025"}
                            onDateChange={setDate}
                            disabled={true}
                            minDate={new Date(2000, 0, 1)}
                            maxDate={new Date(2025, 11, 31)}
                            message="Selecione uma data válida dentro do período."
                            sx={{ alignContent: 'center', paddingTop: 0.3 }}
                        />
                    </Box>
                </Stack>

                <OptionButton
                    sx={{ marginTop: '70px' }}
                    value={number}
                    onChange={setNumber}
                    label="Utiliza Vazpast gerado pelo"
                    labelPosition="side"
                    horizontal={true}
                    lista={[{ id: 0, descricao: 'Gevazp' }, { id: 1, descricao: 'PLD Pro' }]}

                />
            </Box>
        </Box>
    )
}

export default TendenciaHidrologia;