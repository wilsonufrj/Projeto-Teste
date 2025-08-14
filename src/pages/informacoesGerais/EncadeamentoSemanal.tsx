import { CustomBoxWithArrow, Datepicker, OptionButton, SelectOptions, SwitchCard, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material"
import { useRef, useState } from "react";

const EncadeamentoSemanal = () => {

    const [mes, setMes] = useState<string>('');
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

    const [alterarVolumeDecompPartida, setAlterarVolumeDecompPartida] = useState<boolean>(true);
    const [rodarDecompPartida, setRodarDecompPartida] = useState<boolean>(true);
    const [rodarGevazpPartida, setRodarGevazpPartida] = useState<boolean>(true);

    const [number, setNumber] = useState<number>(0);
    const [date, setDate] = useState<string>();

    //const anchorRefAlteraVolumeDecompPartida = useRef<HTMLButtonElement>();

    const ContentAlteraVolumeDecomp = () => {
        return (
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center' }}>
                    <OptionButton
                        value={number}
                        onChange={setNumber}
                        label="Alterar volume"
                        labelPosition="side"
                        horizontal={true}
                        lista={[{ id: 0, descricao: 'inicial' }, { id: 1, descricao: 'final' }]}
                    />
                    <Datepicker
                        title='Data de referência'
                        titlePosition="side"
                        dateDefault={"02/03/2025"}
                        onDateChange={setMes}
                        minDate={new Date(2000, 0, 1)}
                        maxDate={new Date(2025, 11, 31)}
                        message="Selecione uma data válida dentro do período."
                        sx={{ marginLeft: '60px' }}
                    />
                </Box>
            </Box>
        )
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Encadeamento semanal
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box>
                        <SelectOptions
                            value={mes}
                            label={"Data fim semanal"}
                            options={months}
                            placeholder="Mês"
                            onChange={setMes}
                            boxOptionSx={{ width: '158px' }}
                        />
                    </Box>
                    <SelectOptions
                        sx={{ marginLeft: '100px' }}
                        value={mes}
                        label={"Revisão de fim"}
                        options={months}
                        placeholder="RV 0"
                        onChange={setMes}
                        boxOptionSx={{ width: '119px' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <SwitchLabel
                        label="Alterar volume DECOMP de partida"
                        checked={rodarDecompPartida}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setRodarDecompPartida(checked)}
                    //getSwitchRef={anchorRefAlteraVolumeDecompPartida}
                    />
                    <SwitchLabel
                        label="Alterar volume DECOMP de partida"
                        checked={alterarVolumeDecompPartida}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setAlterarVolumeDecompPartida(checked)}
                    //getSwitchRef={anchorRefAlteraVolumeDecompPartida}
                    />
                    <SwitchLabel
                        label="Alterar volume DECOMP de partida"
                        checked={rodarGevazpPartida}
                        labelPlacement="start"
                        message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => setRodarGevazpPartida(checked)}
                    //getSwitchRef={anchorRefAlteraVolumeDecompPartida}
                    />
                </Box>


                <CustomBoxWithArrow contentAlignment="center"
                    children={<ContentAlteraVolumeDecomp />}
                />

            </Stack>
        </Box>
    )
}

export default EncadeamentoSemanal;