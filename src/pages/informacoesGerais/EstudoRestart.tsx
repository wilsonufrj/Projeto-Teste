import { AddableRows, CustomBoxWithArrow, Datepicker, OptionButton, SelectOptions, SwitchLabel, Tab } from "@cepel/cepel-react-components";
import { Box, Grid2, Stack, Typography } from "@mui/material"
import { useState } from "react";

type UserItem = { id: string; nome: string; email: string };

const newItem = (): UserItem => ({
    id: globalThis.crypto?.randomUUID?.() ?? String(Math.random()),
    nome: '',
    email: '',
});

const EstudoRestart = () => {
    const [items, setItems] = useState<UserItem[]>([newItem()]);
    const [mes, setMes] = useState<string>('');

    const [anchorElReexecucaoNaoEncadeada, setAnchorElReexecucaoNaoEncadeada] = useState<HTMLButtonElement>();
    const [enabledReexecucaoNaoEncadeada, setEnablebReexecucaoNaoEncadeada] = useState<boolean>(false);

    const [anchorElPartidaQuente, setAnchorElPartidaQuente] = useState<HTMLButtonElement>();
    const [enabledPartidaQuente, setEnablebPartidaQuente] = useState<boolean>(false);

    const months = Array.from({ length: 4 }, (_, i) => (i + 1).toString());
    const [date, setDate] = useState<string>();


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Estudo de Restart
                    </Typography>
                </Box>

                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Partida quente"}
                            checked={enabledPartidaQuente}
                            onChange={(_, checked) => setEnablebPartidaQuente(checked)}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElPartidaQuente(el)}
                            disabled={enabledReexecucaoNaoEncadeada}
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Reexecução não encadeada"}
                            checked={enabledReexecucaoNaoEncadeada}
                            onChange={(_, checked) => setEnablebReexecucaoNaoEncadeada(checked)}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElReexecucaoNaoEncadeada(el)}
                            disabled={enabledPartidaQuente}
                        />
                    </Grid2>

                    {enabledPartidaQuente && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 2" } }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElPartidaQuente }}
                                style={{ minWidth: 280, width: '1147px' }}
                                contentAlignment='start'
                            >
                                <Stack>
                                    <Box sx={{ display: 'flex', alignContent: 'center' }}>

                                        <Datepicker
                                            title='Data de referência'
                                            titlePosition="side"
                                            dateDefault={"02/03/2025"}
                                            onDateChange={setDate}
                                            minDate={new Date(2000, 0, 1)}
                                            maxDate={new Date(2025, 11, 31)}
                                            message="Selecione uma data válida dentro do período."
                                            sx={{ alignContent: 'center', paddingTop: 0, marginLeft: '60px' }}
                                        />

                                        <SelectOptions
                                            value={mes}
                                            label={"Revisão partida quente"}
                                            options={months}
                                            placeholder="RV 0"
                                            onChange={setMes}
                                            boxOptionSx={{ width: '158px' }}
                                        />
                                    </Box>
                                </Stack>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}

                    {enabledReexecucaoNaoEncadeada && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 2",width: '100%' } }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElReexecucaoNaoEncadeada }}
                                style={{ minWidth: 280, width: '1147px' }}
                                contentAlignment='start'
                            >
                                <Box sx={{ width: '100%' }}>

                                    <AddableRows<UserItem>
                                        addLabel="Adicionar Reexecução"
                                        value={items}
                                        onChange={setItems}
                                        itemFactory={newItem}
                                        getKey={(it) => it.id}
                                        addButtonProps={{ sx: { width: '226px' } }}
                                        onDelete={(item, index) => {
                                            alert(`Usuário removido: ${item.nome || '(sem nome)'} — posição ${index + 1}`);
                                        }}
                                        renderContent={({ item, index, update }) => ({
                                            header: (
                                                <Stack direction={'row'} gap={'34px'} sx={{ display: 'flex', alignContent: 'center' }}>
                                                    <Datepicker
                                                        title='Date início'
                                                        titlePosition="side"
                                                        dateDefault={"02/03/2025"}
                                                        onDateChange={setDate}
                                                        minDate={new Date(2000, 0, 1)}
                                                        maxDate={new Date(2025, 11, 31)}
                                                        message="Selecione uma data válida dentro do período."
                                                        sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                                    />
                                                    <Datepicker
                                                        title='Data fim'
                                                        titlePosition="side"
                                                        dateDefault={"02/03/2025"}
                                                        onDateChange={setDate}
                                                        minDate={new Date(2000, 0, 1)}
                                                        maxDate={new Date(2025, 11, 31)}
                                                        message="Selecione uma data válida dentro do período."
                                                        sx={{ alignContent: 'center', paddingTop: 0.3 }}
                                                    />
                                                </Stack>
                                            )
                                        })}

                                    />
                                </Box>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}
                </Grid2>
            </Stack>
        </Box>
    )
}

export default EstudoRestart;