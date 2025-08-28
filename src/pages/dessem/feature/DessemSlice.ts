import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InformacoesIniciaisType } from "../types/InformacoesIniciaisType.ts";
import type { AtualizacaoDeckType } from "../types/AtualizacaoDeckType.ts";
import type { CenariosType } from "../types/CenariosType.ts";
import type { PlanilhaResultadoType } from "../types/PlanilhaResultadoType.ts";
import type { UploadFile } from "@cepel/cepel-react-components";
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
        selecionarTodas: false,
        atualizaDP: false,
        atualizaIA: false,
        atualizaDeflant: false
    } as AtualizacaoDeckType,
    cenarios: [],
    planilhaResultado: {
        selecionarTodasPlanilhas:false,
        custoMarginalSubmercados:false, // ou é SwitchItem[] ?
        balancoEnergiaSubmercado:false,
        operacaoUsinasHidraulicas:false
    } as PlanilhaResultadoType
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
        setSelecionarTodas: (state, action: PayloadAction<boolean>) => {
            state.atualizacaoDeck.selecionarTodas = action.payload;
        },
        setAtualizaDP: (state, action: PayloadAction<boolean>) => {
            state.atualizacaoDeck.atualizaDP = action.payload;
        },
        setAtualizaIA: (state, action: PayloadAction<boolean>) => {
            state.atualizacaoDeck.atualizaIA = action.payload;
        },
        setAtualizaDeflant: (state, action: PayloadAction<boolean>) => {
            state.atualizacaoDeck.atualizaDeflant = action.payload;
        },
        addCenarios: (state, action: PayloadAction<CenariosType[]>) => {
            state.cenarios = action.payload;
        },
        removeCenarioByIndex: (state, action: PayloadAction<number>) => {
            if (action.payload >= 0 && action.payload < state.cenarios.length) {
                state.cenarios.splice(action.payload, 1);
            }
        },
        setSelecionarTodasPlanilhas: (state, action: PayloadAction<boolean>) => {
            state.planilhaResultado.selecionarTodas = action.payload
        },
        setCustoMarginalSubmercados: (state, action: PayloadAction<boolean>) => {
            state.planilhaResultado.custoMarginalSubmercados = action.payload;
        },
        setBalancoEnergiaSubmercado: (state, action: PayloadAction<boolean>) => {
            state.planilhaResultado.balancoEnergiaSubmercado = action.payload;
        },
        setOperacaoUsinasHidraulicas: (state, action: PayloadAction<boolean>) => {
            state.planilhaResultado.operacaoUsinasHidraulicas = action.payload;
        }
    }
})

export const {
    setVersao,
    setTentativas,
    setAtivaCrossover,
    setSelecionarTodas,
    setAtualizaDP,
    setAtualizaIA,
    setAtualizaDeflant,
    addCenarios,
    removeCenarioByIndex,
    setSelecionarTodasPlanilhas,
    setCustoMarginalSubmercados,
    setBalancoEnergiaSubmercado,
    setOperacaoUsinasHidraulicas,
} = dessemSlice.actions;
export default dessemSlice.reducer;

