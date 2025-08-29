import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InformacoesIniciaisType } from "../types/InformacoesIniciaisType.ts";
import type { AtualizacaoDeckType } from "../types/AtualizacaoDeckType.ts";
import type { CenariosType } from "../types/CenariosType.ts";
import type { PlanilhaResultadoType } from "../types/PlanilhaResultadoType.ts";
import type { SwitchItem } from "@cepel/cepel-react-components";
interface DessemType {
    informacoesIniciais: InformacoesIniciaisType,
    atualizacaoDeck: AtualizacaoDeckType,
    cenarios: Array<CenariosType>,
    planilhaResultado: PlanilhaResultadoType
}

const initialState: DessemType = {
    informacoesIniciais: {
        versao: '',
        tentativas: '',
        ativaCrossover: false,
    } as InformacoesIniciaisType,
    atualizacaoDeck: {
        atualizaDP: [
            { id: '1', label: 'Atualiza DP', checked: true, message: 'Atualiza o registro DP do entdados.dat' },
        ],
        atualizaIA: [
            { id: '1', label: 'Atualiza IA', checked: true, message: 'Atualiza o registro IA do entdados.dat' },
        ],
        atualizaDeflant: [
            { id: '1', label: 'Atualiza Deflant', checked: true, message: 'Atualiza o arquivo deflant.dat' },
        ],
    },
    cenarios: [],
    planilhaResultado: {
        custoMarginalSubmercados: [
            { id: '1', label: 'PDOCMOSIST', checked: true, message: 'Informações planilha 1' },
        ],
        balancoEnergiaSubmercado: [
            { id: '1', label: 'PDOSIST', checked: true, message: 'Informações planilha 1' },
        ],
        operacaoUsinasHidraulicas: [
            { id: '1', label: 'PDOHIDR', checked: true, message: 'Informações planilha 1' },
        ],
    }
}

const dessemSlice = createSlice({
    name: 'dessem',
    initialState,
    reducers: {
        setVersao: (state, action: PayloadAction<string>) => {
            state.informacoesIniciais.versao = action.payload;
        },
        setTentativas: (state, action: PayloadAction<string>) => {
            state.informacoesIniciais.tentativas = action.payload;
        },
        setAtivaCrossover: (state, action: PayloadAction<boolean>) => {
            state.informacoesIniciais.ativaCrossover = action.payload;
        },
        setAtualizarDeck: (state,action: PayloadAction<{ atributo: keyof AtualizacaoDeckType; index: string }>) => {
            const { atributo, index } = action.payload;
            const lista:Array<SwitchItem> = state.atualizacaoDeck[atributo]
            state.atualizacaoDeck[atributo] = lista.map((item) => item.id === index ? { ...item, checked: !item.checked } : item)
        },
        setAllCheckedTrueDeck: (state,action: PayloadAction<boolean>) => {
            Object.keys(state.atualizacaoDeck).forEach((atributo) => {
            const arr:Array<SwitchItem> = state.atualizacaoDeck[atributo as keyof AtualizacaoDeckType];
            state.atualizacaoDeck[atributo as keyof AtualizacaoDeckType] = arr.map(item => ({ ...item, checked: action.payload }));  
            });
        },
        removeCenarioByIndex: (state, action: PayloadAction<number>) => {
            if (action.payload >= 0 && action.payload < state.cenarios.length) {
                state.cenarios.splice(action.payload, 1);
            }
        },
        setSelecionarPlanilhas: (state,action: PayloadAction<{ atributo: keyof PlanilhaResultadoType; index: string }>) => {
            const { atributo, index } = action.payload;
            const lista:Array<SwitchItem> = state.planilhaResultado[atributo]
            state.planilhaResultado[atributo] = lista.map((item) => item.id === index ? { ...item, checked: !item.checked } : item)
        },
        setAllCheckedTruePlanilhas: (state,action: PayloadAction<boolean>) => {
            Object.keys(state.planilhaResultado).forEach((atributo) => {
            const arr:Array<SwitchItem> = state.planilhaResultado[atributo as keyof PlanilhaResultadoType];
            state.planilhaResultado[atributo as keyof PlanilhaResultadoType] = arr.map(item => ({ ...item, checked: action.payload }));  
            });
        }
    }
})

export const {
    setVersao,
    setTentativas,
    setAtivaCrossover,
    setAtualizarDeck,
    setAllCheckedTrueDeck,
    removeCenarioByIndex,
    setSelecionarPlanilhas,
    setAllCheckedTruePlanilhas,
} = dessemSlice.actions;
export default dessemSlice.reducer;

