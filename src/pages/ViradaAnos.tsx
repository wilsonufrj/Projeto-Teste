import { Box, Stack, Typography } from "@mui/material";
import { DatePicker } from "../components/DatePickers/Datepicker";
import AddableRows from "../components/AddableRows/AddableRows";
import { useState } from "react";
import TextField from "../components/TextField/TextField";
import SelectOptions from "../components/SelectOptions/SelectOptions";


type UserItem = { id: string; nome: string; email: string };


const newItem = (): UserItem => ({
    id: globalThis.crypto?.randomUUID?.() ?? String(Math.random()),
    nome: '',
    email: '',
});

const ViradaAnos = () => {

    const [items, setItems] = useState<UserItem[]>([newItem()]);
    const [nomesArquivos, setNomesArquivos] = useState<string>("");
    const [date, setDate] = useState<Date>();


    const [versao, setVersao] = useState<string>("");
    const options = ['1', '2', '3']

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Virada de anos
                    </Typography>
                </Box>

                <AddableRows<UserItem>
                    addLabel="Adicionar virada de anos"
                    value={items}
                    onChange={setItems}
                    itemFactory={newItem}
                    getKey={(it) => it.id}
                    addButtonProps={{ sx: { width: '302px' } }}
                    onDelete={(item, index) => {
                        alert(`Usuário removido: ${item.nome || '(sem nome)'} — posição ${index + 1}`);
                    }}
                    renderContent={({ item, index, update }) => ({
                        header: (
                            <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                <DatePicker
                                    title='Período'
                                    titlePosition="side"
                                    dateDefault={"02/03/2025"}
                                    onDateChange={setDate}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                    sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                />
                                <SelectOptions
                                    value={versao}
                                    label={"Anos de estudo"}
                                    options={options}
                                    placeholder="Selecione a quantidade"
                                    onChange={setVersao}
                                    boxOptionSx={{ width: '367px' }}
                                />
                            </Box>
                        )
                    })}

                />
            </Stack >

        </Box >
    )
}

export default ViradaAnos;