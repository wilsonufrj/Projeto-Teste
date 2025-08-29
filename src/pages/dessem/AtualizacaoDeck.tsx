import { SwitchCard, SwitchLabel } from "@cepel/cepel-react-components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { AtualizacaoDeckType } from "./types/AtualizacaoDeckType";
import { setAllCheckedTrueDeck, setAtualizarDeck } from "./feature/DessemSlice";

const AtualizacaoDeck = () => {
    const dispatch = useAppDispatch()
    const atualizacaoDecks = useAppSelector((state) => state.dessem.atualizacaoDeck);


    const handleToggle = (
        atributo:keyof AtualizacaoDeckType ,
        index: string,
    ) => {
        dispatch(setAtualizarDeck({atributo, index}))
    };

    const verificaChecked: boolean = Object.keys(atualizacaoDecks).every((atributo) => atualizacaoDecks[atributo as keyof AtualizacaoDeckType].some(item => item.checked));

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={"30px"}>
                <Box sx={{ display: "flex", justifySelf: 'start' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: "120%", marginBottom: '30px' }}>
                        Atualização Deck
                    </Typography>
                </Box>

                <Box>
                    <SwitchLabel
                        label="Selecionar todas"
                        checked={verificaChecked}
                        labelPlacement="start"
                        // message="Switch para diminuir automaticamente o horizonte de estudo"
                        onChange={(_event, checked) => dispatch(setAllCheckedTrueDeck(checked))} 
                    />

                    <Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap:'30px' }}>
                            <SwitchCard
                                title="Atualiza DP"
                                switches={atualizacaoDecks.atualizaDP}
                                labelPlacement="start"
                                onToggle={(id) => handleToggle("atualizaDP", id)} 
                            />

                            <SwitchCard
                                title="Atualiza IA"
                                switches={atualizacaoDecks.atualizaIA}
                                labelPlacement="start"
                                onToggle={(id) => handleToggle("atualizaIA", id)}
                            />

                            <SwitchCard
                                title="Atualiza Deflant"
                                switches={atualizacaoDecks.atualizaDeflant}
                                labelPlacement="start"
                                onToggle={(id) => handleToggle("atualizaDeflant", id)}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default AtualizacaoDeck;