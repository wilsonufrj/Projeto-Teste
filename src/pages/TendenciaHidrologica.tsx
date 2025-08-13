import { Box, Stack, Typography } from "@mui/material";
import SwitchLabel from "../components/SwitchLabel/SwitchLabel";
import { useState } from "react";
import TextField from "../components/TextField/TextField";
import { OptionButton } from "../components/OptionButton/OptionButton";

const TendenciaHidrologia = () => {

    const [todoHorizonte, setTodoHorizonte] = useState<boolean>(false);
    const [tipoVazpast, setTipoVazpast] = useState<boolean>(false);
    //const [todoHorizonte, setTodoHorizonte] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(0);



    return (
        <Box sx={{ width: '75%' }}>
            <Box sx={{ display: "flex", justifySelf: 'start', marginBottom: '43px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '59px' }}>
                    Tendencia hidrológica
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, lineHeight: "120%", marginBottom: '19px' }}>
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

                    <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                        <SwitchLabel
                            label="Tipo Vaspast"
                            checked={tipoVazpast}
                            labelPlacement="start"
                            message="Switch para diminuir automaticamente o horizonte de estudo"
                            onChange={(_event, checked) => setTipoVazpast(checked)} />

                        <TextField value="ola" onChange={() => { }} label="Data de início" />
                    </Box>
                </Stack>

                <OptionButton
                    sx={{ marginTop: '70px' }}
                    value={number}
                    onChange={setNumber}
                    label="Armazenamento local temporário por"
                    labelPosition="side"
                    horizontal={true}
                    lista={[{ id: 0, descricao: 'Gevazp' }, { id: 1, descricao: 'PLD Pro' }]}

                />
            </Box>
        </Box>
    )
}

export default TendenciaHidrologia;