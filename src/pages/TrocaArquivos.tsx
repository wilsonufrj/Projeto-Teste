import { Box, Stack, Typography } from "@mui/material";
import TextField from "../components/TextField/TextField";
import AddableRows from "../components/AddableRows/AddableRows";
import React, { useState } from "react";
import { DatePicker } from "../components/DatePickers/Datepicker";
import { OptionButton } from "../components/OptionButton/OptionButton";
import FileUpload from "../components/FileUpload/FileUpload";

type UserItem = { id: string; nome: string; email: string };

const newItem = (): UserItem => ({
    id: globalThis.crypto?.randomUUID?.() ?? String(Math.random()),
    nome: '',
    email: '',
});

const TrocaArquivos = () => {

    const [items, setItems] = useState<UserItem[]>([newItem()]);
    const [date, setDate] = useState<Date>();

    const [nomesArquivos, setNomesArquivos] = useState<string>("");

    return (
        <Box sx={{ width: '90%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '59px' }}>
                        Troca Arquivos
                    </Typography>
                </Box>

                <AddableRows<UserItem>
                    addLabel="Adicionar Troca de Arquivos"
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
                            <Box sx={{ display: 'flex', gap: 2, flex: 1, alignContent: 'center' }}>
                                <DatePicker
                                    title='Período'
                                    titlePosition="side"
                                    dateDefault="23/05/2025"
                                    onDateChange={setDate}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                />
                                <TextField
                                    label='Nome do Arquivo'
                                    value={nomesArquivos}
                                    onChange={setNomesArquivos}
                                    inputProps={{ sx: { flexGrow: 1 } }}
                                />
                            </Box>
                        ),
                        body: (
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%" }}>
                                    Enviar arquivo
                                </Typography>
                                <FileUpload />
                            </Box>
                        )
                    })}

                />
            </Stack>

        </Box >
    )
}

export default TrocaArquivos;