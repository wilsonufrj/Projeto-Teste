import { CustomBoxWithArrow, Datepicker, FileUpload, OptionButton, SelectOptions, SwitchCard, SwitchLabel } from "@cepel/cepel-react-components";
import { Grid2 } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material"
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useRef, useState } from "react";

const EncadeamentoSemanal = () => {

    const [mes, setMes] = useState<string>('');
    const [ano, setAno] = useState<string>('');

    const months = Array.from({ length: 4 }, (_, i) => (i + 1).toString());
    const years = Array.from({ length: 4 }, (_, i) => (i + 2020).toString());

    const [alterarVolumeDecompPartida, setAlterarVolumeDecompPartida] = useState<boolean>(true);
    const [rodarDecompPartida, setRodarDecompPartida] = useState<boolean>(true);
    const [rodarGevazpPartida, setRodarGevazpPartida] = useState<boolean>(true);

    const [number, setNumber] = useState<number>(0);
    const [date, setDate] = useState<string>();

    const [anchorElAlteraVolumeDecompPartida, setAnchorElAlteraVolumeDecompPartida] = useState<HTMLButtonElement>();
    const [enabledAlteraVolumeDecompPartida, setEnablebAlteraVolumeDecompPartida] = useState<boolean>(true);

    const [anchorElRodaDecomPartida, setAnchorElRodaDecompPartida] = useState<HTMLButtonElement>();
    const [enabledRodaDecompPartida, setEnablebRodaDecompPartida] = useState<boolean>(true);

    const [anchorElRodaGevazpPartida, setAnchorElRodaGevazpPartida] = useState<HTMLButtonElement>();
    const [enabledRodaGevazpPartida, setEnablebRodaGevazpPartida] = useState<boolean>(false);

    
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Encadeamento semanal
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center' }}>
                    <Box >
                        <SelectOptions
                            value={mes}
                            label={"Data fim semanal"}
                            options={months}
                            placeholder="Mês"
                            onChange={setMes}
                            boxOptionSx={{ width: '158px' }}
                        />
                        <SelectOptions
                            value={ano}
                            label={""}
                            options={years}
                            placeholder="Ano"
                            onChange={setAno}
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

                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 2,width:'100%' }}>
                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Rodar DECOMP  de partida"}
                            checked={enabledRodaDecompPartida}
                            onChange={(_, checked) => setEnablebRodaDecompPartida(checked)}
                            message="Receba alertas importantes."
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Altera volume DECOMP de partida"}
                            checked={enabledAlteraVolumeDecompPartida}
                            onChange={(_, checked) => setEnablebAlteraVolumeDecompPartida(checked)}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElAlteraVolumeDecompPartida(el)}
                        />
                    </Grid2>

                    <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                        <SwitchLabel
                            label={"Rodar GEVAZP de partida"}
                            checked={enabledRodaGevazpPartida}
                            onChange={(_, checked) => setEnablebRodaGevazpPartida(checked)}
                            message="Receba alertas importantes."
                            getSwitchRef={(el) => setAnchorElRodaGevazpPartida(el)}
                        />
                    </Grid2>

                    {enabledAlteraVolumeDecompPartida && (
                        <Grid2 sx={{ gridColumn: { xs: "span 12", md: "span 12" }, width: "100%" }}>
                            <CustomBoxWithArrow
                                anchorRef={{ current: anchorElRodaDecomPartida }}
                                style={{ minWidth: 280, width: "100%" }}
                                contentAlignment='start'
                            >
                                <Stack>
                                    <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                        <OptionButton
                                            sx={{ marginTop: '7px' }}
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
                                            onDateChange={setDate}
                                            minDate={new Date(2000, 0, 1)}
                                            maxDate={new Date(2025, 11, 31)}
                                            message="Selecione uma data válida dentro do período."
                                            sx={{ alignContent: 'center', paddingTop: 0, marginLeft: '60px' }}
                                        />

                                    </Box>
                                    <Box sx={{ marginTop: '55px', width: '100%' }}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                                            Arquivo de recuperação de volumes
                                        </Typography>
                                        <FileUpload />
                                    </Box>
                                </Stack>
                            </CustomBoxWithArrow>
                        </Grid2>
                    )}

                </Grid2>

                <Box sx={{ marginTop: '37px', width: '70%' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: "120%", marginBottom: '15px' }}>
                        Revisão dos PREVS de partida
                    </Typography>
                    <FileUpload />
                </Box>

            </Stack >
        </Box >
    )
}

export default EncadeamentoSemanal;