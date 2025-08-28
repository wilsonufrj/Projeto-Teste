import { createSlice, type Action, type PayloadAction } from '@reduxjs/toolkit';
import type { InformacoesIniciaisTypes } from '../types/InformacoesIniciaisTypes';
import type { GerenciadorPLTypes } from '../types/GerenciadorPLTypes';
import type { SwitchItem, UploadFile } from "@cepel/cepel-react-components";
import type { TendenciaHidrologicaTypes } from '../types/TendenciaHidrologicaTypes';
import type { TrocaArquivoTypes } from '../types/TrocaArquivoTypes';
import type { TrocaVersaoTypes } from '../types/TrocaVersaoTypes';
import type { PlanilhaResultadosTypes } from '../types/PlanilhaResultadoTypes';

interface NewaveTypes {
  informacoesIniciais: InformacoesIniciaisTypes;
  gerenciadorPL: GerenciadorPLTypes;
  trocaArquivos: Array<TrocaArquivoTypes>;
  trocaVersao: Array<TrocaVersaoTypes>;
  tendenciaHidrologica: TendenciaHidrologicaTypes;
  planilhasResultados: PlanilhaResultadosTypes;
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
    armazenamentoLocalTemporario: 0,
  } as GerenciadorPLTypes,
  trocaArquivos: [] as Array<TrocaArquivoTypes>,
  trocaVersao: [] as Array<TrocaVersaoTypes>,
  tendenciaHidrologica: {
    dataInicioPorPosto: '',
    utilizaVazpast: '',
    tipoVazpast: '',
  } as TendenciaHidrologicaTypes,
  planilhasResultados: {
    custoMarginalOperacao: [
      { id: '1', label: 'CMARG', checked: true, message: 'Informações planilha 1' },
    ],
    defictEnergia: [
      { id: '1', label: 'DEFP001', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'DEFP001', checked: true, message: 'Informações planilha 2' }
    ],
    despachoUsinasGNL: [
      { id: '1', label: 'BGNL001', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'BGNL002', checked: true, message: 'Informações planilha 2' }
    ],
    geracaoHidraulica: [
      { id: '1', label: 'GHIDR', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'GHIDRM', checked: true, message: 'Informações planilha 2' },
      { id: '3', label: 'GHIDRSIN', checked: true, message: 'Informações planilha 2' },
      { id: '4', label: 'GHTOT', checked: true, message: 'Informações planilha 2' },
      { id: '5', label: 'GHTOTM', checked: true, message: 'Informações planilha 2' },
      { id: '6', label: 'GHTOTSIN', checked: true, message: 'Informações planilha 2' },
    ],
    geracaoTermica: [
      { id: '1', label: 'GTTOT', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'GTTOTSIN', checked: true, message: 'Informações planilha 2' },
    ],
    intercambioSubsistema: [
      { id: '1', label: 'INT', checked: true, message: 'Informações planilha 1' }
    ],
    mercadoLiquido: [
      { id: '1', label: 'MERCL', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'CMERCLSIN', checked: true, message: 'Informações planilha 2' }
    ],
    parcelaControlavelENA: [
      { id: '1', label: 'EAF', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'EAFB', checked: true, message: 'Informações planilha 2' },
      { id: '3', label: 'EAFBSIN', checked: true, message: 'Informações planilha 2' },
      { id: '4', label: 'EAFM', checked: true, message: 'Informações planilha 2' },
      { id: '5', label: 'EAFMSIN', checked: true, message: 'Informações planilha 2' },
    ],
    vertimentoControlavel: [
      { id: '1', label: 'EVERT', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'EVERTM', checked: true, message: 'Informações planilha 2' },
      { id: '3', label: 'EVERTSIN', checked: true, message: 'Informações planilha 2' },
    ],
    vertimentoTurbinavel: [
      { id: '1', label: 'VERTURBM', checked: true, message: 'Informações planilha 1' },
      { id: '2', label: 'VERTURBNW', checked: true, message: 'Informações planilha 2' },
      { id: '3', label: 'VERTURBSIN', checked: true, message: 'Informações planilha 2' }
    ]
  },
}

const newaveSlice = createSlice({
  name: 'newave',
  initialState,
  reducers: {
    resetState: () => initialState,
    setVersao: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.versao = action.payload;
    },
    setNumeroProcessadores: (state, action: PayloadAction<string>) => {
      state.informacoesIniciais.numeroProcessadores = action.payload;
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
    setDataInicioPorPosto(state, action: PayloadAction<string>) {
      state.tendenciaHidrologica.dataInicioPorPosto = action.payload;
    },
    setUtilizacaoVazpast(state, action: PayloadAction<number>) {
      state.tendenciaHidrologica.utilizaVazpast = action.payload;
    },
    setTipoVazpast(state, action: PayloadAction<number>) {
      state.tendenciaHidrologica.tipoVazpast = action.payload;
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

    addTrocaArquivos: (state, action: PayloadAction<TrocaArquivoTypes[]>) => {
      state.trocaArquivos = action.payload;
    },
    removeTrocaArquivoByIndex: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.trocaArquivos.length) {
        state.trocaArquivos.splice(action.payload, 1);
      }
    },
    setSelecionarPlanilhas: (state,action: PayloadAction<{ atributo: keyof PlanilhaResultadosTypes; index: string }>) => {
      const { atributo, index } = action.payload;
      const lista:Array<SwitchItem> = state.planilhasResultados[atributo]
      state.planilhasResultados[atributo] = lista.map((item) => item.id === index ? { ...item, checked: !item.checked } : item)
    },
    setAllCheckedTrue: (state,action: PayloadAction<boolean>) => {
      Object.keys(state.planilhasResultados).forEach((atributo) => {
        const arr:Array<SwitchItem> = state.planilhasResultados[atributo as keyof PlanilhaResultadosTypes];
        state.planilhasResultados[atributo as keyof PlanilhaResultadosTypes] = arr.map(item => ({ ...item, checked: action.payload }));  
      });
    }
  },
});

export const { resetState,
  setVersao,
  setNumeroProcessadores,
  setPrimeiraSimulacao,
  setSegundaSimulacao,
  setDiminuicaoAutomaticaHorizonte,
  updateGerenciadorPL,
  setGrenciadorExternoProcessos,
  setComunicacaoDoisNiveis,
  setAlocacaoMemoriaEna,
  setAlocacaoCortesFCF,
  setArmazenamentoLocalTemporario,
  addTrocaArquivos,
  removeTrocaArquivoByIndex,
  setDataInicioPorPosto,
  setTipoVazpast,
  setUtilizacaoVazpast,
  setSelecionarPlanilhas,
  setAllCheckedTrue
} = newaveSlice.actions;
export default newaveSlice.reducer;
