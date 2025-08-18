import { CustomBoxWithArrow, Datepicker, OptionButton } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";


const ArquivoDadger = () => {


    const [tipoGeracao, setTipoGeracao] = useState<number>(0);
    const [opcoes, setOpcoes] = useState<number>(0);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [dateInicioDadgerCompleto, setInicioDadgerCompleto] = useState<string>();
    const [dateFimDadgerCompleto, setFimDadgerCompleto] = useState<string>();


    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Arquivo Dadger
                    </Typography>
                </Box>

                <OptionButton
                    value={tipoGeracao}
                    sx={{ marginTop: '60px' }}
                    onChange={setTipoGeracao}
                    label="Tipo"
                    labelPosition="side"
                    horizontal={true}
                    lista={[{ id: 0, descricao: 'Dadger completo' },
                    { id: 1, descricao: 'Seleciona registro' },
                    { id: 2, descricao: 'Misto' },]}
                    getButtonRef={(el) => {
                        if (el?.textContent === "Seleciona registro") {
                            setAnchorEl(el);
                        } else {
                            setAnchorEl(null)
                        }
                    }}
                />

                {anchorEl && (
                    <CustomBoxWithArrow
                        anchorRef={{ current: anchorEl }}
                        style={{ minWidth: 280, width: "100%" }}
                        contentAlignment="start"
                    >
                        <Stack>
                            <OptionButton
                            sx={{marginTop:'30px'}}
                                value={opcoes}
                                onChange={setOpcoes}
                                label="Opções"
                                labelPosition="side"
                                horizontal={true}
                                lista={[{ id: 0, descricao: 'Execução' },
                                { id: 1, descricao: 'Interromper execução' },
                                ]}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '30px',marginTop:'40px' }}>
                                <Datepicker
                                    title='Início Dadger completo'
                                    titlePosition="side"
                                    dateDefault={"02/03/2025"}
                                    onDateChange={setInicioDadgerCompleto}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                />
                                <Datepicker
                                    title='Fim Dadger completo'
                                    titlePosition="side"
                                    dateDefault={"02/03/2025"}
                                    onDateChange={setFimDadgerCompleto}
                                    minDate={new Date(2000, 0, 1)}
                                    maxDate={new Date(2025, 11, 31)}
                                    message="Selecione uma data válida dentro do período."
                                />
                            </Box>
                        </Stack>
                    </CustomBoxWithArrow>
                )}
            </Stack>
        </Box>
    )
}

export default ArquivoDadger;