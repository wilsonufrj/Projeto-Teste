import { AddableRows, Datepicker, SelectOptions, TextField } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

type UserItem = { id: string; nome: string; email: string };

const newItem = (): UserItem => ({
    id: globalThis.crypto?.randomUUID?.() ?? String(Math.random()),
    nome: '',
    email: '',
});

const Cenarios = () => {

    const [items, setItems] = useState<UserItem[]>([newItem()]);
    const [date, setDate] = useState<Date>();

    const [nome, setNome] = useState<string>("");   

    const [revisao,setRevisao] = useState<string>("");
    const revisoes = ['RV0','RV1','RV2','RV3','RV4'];

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Atualização Deck
                    </Typography>
                </Box>

                <Box>
                    <AddableRows<UserItem>
                        addLabel="Adicionar Cenários"
                        value={items}
                        onChange={setItems}
                        itemFactory={newItem}
                        getKey={(it) => it.id}
                        addButtonProps={{ sx: { width: '264px' } }}
                        onDelete={(item, index) => {
                            alert(`Usuário removido: ${item.nome || '(sem nome)'} — posição ${index + 1}`);
                        }}
                        renderContent={({ item, index, update }) => ({
                            header: (
                                <Box sx={{ display: 'flex', alignContent: 'center',justifyContent:'flex-start', gap:'30px' }}>
                                    <TextField
                                        label='Nome'
                                        value={nome}
                                        onChange={setNome}
                                        inputProps={{ sx: { width: '250px' } }}
                                    />
                                    <Datepicker
                                        title='Período'
                                        titlePosition="side"
                                        dateDefault={"02/03/2025"}
                                        onDateChange={setDate}
                                        minDate={new Date(2000, 0, 1)}
                                        maxDate={new Date(2025, 11, 31)}
                                        message="Selecione uma data válida dentro do período."
                                        sx={{ alignContent: 'center', paddingTop: 0.3, width:'100%' }}
                                    />
                                    <Box sx={{display:'flex',justifyContent:'start'}}>
                                    <SelectOptions
                                        value={revisao}
                                        label={"Revisão"}
                                        options={revisoes}
                                        placeholder="Rev 0"
                                        onChange={setRevisao}
                                        boxOptionSx={{ width: '=138px' }}
                                    />
                                    </Box>
                                    
                                </Box>
                            )
                        })}

                    />
                </Box>

            </Stack>
        </Box>
    )
}

export default Cenarios;