import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InformacoesIniciaisTypes } from '../types/InformacoesIniciaisTypes';
import type { GerenciadorPLTypes } from '../types/gerenciadorPLTypes';
import type { UploadFile } from "@cepel/cepel-react-components";

interface NewaveTypes {
  informacoesIniciais: InformacoesIniciaisTypes;
  gerenciadorPL: GerenciadorPLTypes;
  trocaArquivos: null;
  trocaVersao: null;
  viradaAnos: null;
  tendenciaHidrologica: null;
  planilhasResultados: null;
}

const initialState: NewaveTypes = {
  informacoesIniciais: {
    versao: '',
    numeroProcessadores: '',
    configuracaoNos: '',
    primeiraSimulacao: '',
    segundaSimulacao: '',
    diminuicaoAutomaticaHorizonte: false,
  } as InformacoesIniciaisTypes,
  gerenciadorPL: {
    gerenciadorPL: [],
    grenciadorExternoProcessos: false,
    comunicacaoDoisNiveis: false,
    alocacaoMemoriaEna: false,
    alocacaoCortesFCF: false,
    armazenamentoLocalTemporario: undefined,
  } as GerenciadorPLTypes,
  trocaArquivos: null,
  trocaVersao: null,
  viradaAnos: null,
  tendenciaHidrologica: null,
  planilhasResultados: null,
}

const newaveSlice = createSlice({
  name: 'informacoesGeraisNewave',
  initialState,
  reducers: {
    resetState: () => initialState,
    setVersao: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.versao = action.payload;
    },
    setNumeroProcessadores: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.numeroProcessadores = action.payload;
    },
    setConfiguracaoNos: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.configuracaoNos = action.payload;
    },
    setPrimeiraSimulacao: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.primeiraSimulacao = action.payload;
    },
    setSegundaSimulacao: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.segundaSimulacao = action.payload;
    },
    setDiminuicaoAutomaticaHorizonte: (state, action: PayloadAction<boolean>) => {
      state.informacoesIniciais.diminuicaoAutomaticaHorizonte = action.payload;
    },

    updateGerenciadorPL: (state, action: PayloadAction<Array<UploadFile>>) => {
      state.gerenciadorPL.gerenciadorPL = action.payload;
    },
    setGrenciadorExternoProcessos: (state, action: PayloadAction<boolean>) => {
      state.gerenciadorPL.grenciadorExternoProcessos = action.payload;
    },
    setComunicacaoDoisNiveis: (state, action: PayloadAction<boolean>) => {
      state.gerenciadorPL.comunicacaoDoisNiveis = action.payload;
    },
    setAlocacaoMemoriaEna: (state, action: PayloadAction<boolean>) => {
      state.gerenciadorPL.alocacaoMemoriaEna = action.payload;
    },
    setAlocacaoCortesFCF: (state, action: PayloadAction<boolean>) => {
      state.gerenciadorPL.alocacaoCortesFCF = action.payload;
    },
    setArmazenamentoLocalTemporario: (state, action: PayloadAction<number>) => {
      state.gerenciadorPL.armazenamentoLocalTemporario = action.payload;
    },
  },
});

export const { resetState,
  setVersao,
  setNumeroProcessadores,
  setConfiguracaoNos,
  setPrimeiraSimulacao,
  setSegundaSimulacao,
  setDiminuicaoAutomaticaHorizonte,
  updateGerenciadorPL,
  setGrenciadorExternoProcessos,
  setComunicacaoDoisNiveis,
  setAlocacaoMemoriaEna,
  setAlocacaoCortesFCF,
  setArmazenamentoLocalTemporario
} = newaveSlice.actions;
export default newaveSlice.reducer;
