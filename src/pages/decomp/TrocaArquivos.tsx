import { AddableRows, Datepicker, FileUpload, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

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
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
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
                            <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                <Datepicker
                                    title='Período'
                                    titlePosition="side"
                                    dateDefault={"02/03/2025"}
                                    onDateChange={setDate}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                    sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                />
                                <TextField
                                    label='Nome do Arquivo'
                                    value={nomesArquivos}
                                    onChange={setNomesArquivos}
                                    inputProps={{ sx: { width: '482px' } }}
                                />
                            </Box>
                        ),
                        body: (
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                                    Enviar arquivo
                                </Typography>
                                <FileUpload />
                            </Box>
                        )
                    })}

                />
            </Stack >

        </Box >
    )
}

export default TrocaArquivos;