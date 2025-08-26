import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EncadeamentoSemanalTypes } from "../types/EncadeamentoSemanalType";
import type { LimitesPLDTypes } from "../types/LimitesPLDType";
import type { AjusteArmazenamentoFinalType } from "../types/AjusteArmazenamentoFinalType";
import type { EstudoRestartType, Reexecucao } from "../types/EstudoRestartType";
import type { UploadFile } from "@cepel/cepel-react-components";
interface InformacoesGeraisType {
    encadeamentoSemanal: EncadeamentoSemanalTypes,
    limitesPLD: Array<LimitesPLDTypes>,
    ajusteArmazenamentoFinal: AjusteArmazenamentoFinalType,
    estudoRestart: EstudoRestartType
}

const initialState: InformacoesGeraisType = {
    encadeamentoSemanal: {
        mesFimSemanal: '',
        anoFimSemanal: '',
        revisaoFim: '',
        rodarDecompPartida: false,
        alterarVolumeDecompPartida: false,
        alterarVolume: '',
        dataReferencia: '',
        prevsPartida: [],
        rodarGevazpPartida: false,
        recuperacaoVolumes: []
    } as EncadeamentoSemanalTypes,
    limitesPLD: [],
    ajusteArmazenamentoFinal: {
        informacao: ''
    } as AjusteArmazenamentoFinalType,
    estudoRestart: {
        partidaQuente: false,
        dataReferencia: '',
        revisaoPartidaQuente: '',
        reexecucaoNaoEncadeada: false,
        reexecucoes: []
    }
}

const informacoesGeraisSlice = createSlice({
    name: 'informacoesGerais',
    initialState,
    reducers: {
        setMesFimSemanal: (state, action: PayloadAction<string>) => {
            state.encadeamentoSemanal.mesFimSemanal = action.payload;
        },
        setAnoFimSemanal: (state, action: PayloadAction<string>) => {
            state.encadeamentoSemanal.anoFimSemanal = action.payload;
        },
        setRevisaoFim: (state, action: PayloadAction<string>) => {
            state.encadeamentoSemanal.revisaoFim = action.payload;
        },
        setRodarDecompPartida: (state, action: PayloadAction<boolean>) => {
            state.encadeamentoSemanal.rodarDecompPartida = action.payload;
        },
        setAlterarVolumeDecompPartida: (state, action: PayloadAction<boolean>) => {
            state.encadeamentoSemanal.alterarVolumeDecompPartida = action.payload;
        },
        setRodarGevazpPartida: (state, action: PayloadAction<boolean>) => {
            state.encadeamentoSemanal.rodarGevazpPartida = action.payload;
        },
        setAlterarVolume: (state, action: PayloadAction<number>) => {
            state.encadeamentoSemanal.alterarVolume = action.payload;
        },
        setDataReferencia: (state, action: PayloadAction<string>) => {
            state.encadeamentoSemanal.dataReferencia = action.payload;
        },
        addLimitesPLD: (state, action: PayloadAction<LimitesPLDTypes[]>) => {
            state.limitesPLD = action.payload;
        },
        removeLimitePLDByIndex: (state, action: PayloadAction<number>) => {
            if (action.payload >= 0 && action.payload < state.limitesPLD.length) {
                state.limitesPLD.splice(action.payload, 1);
            }
        },
        setInformacoes: (state, action: PayloadAction<string>) => {
            state.ajusteArmazenamentoFinal.informacao = action.payload
        },
        setPartidaQuente: (state, action: PayloadAction<boolean>) => {
            state.estudoRestart.partidaQuente = action.payload;
        },

        setDataReferenciaRestart: (state, action: PayloadAction<string>) => {
            state.estudoRestart.dataReferencia = action.payload;
        },

        setRevisaoPartidaQuente: (state, action: PayloadAction<string>) => {
            state.estudoRestart.revisaoPartidaQuente = action.payload;
        },

        setReexecucaoNaoEncadeada: (state, action: PayloadAction<boolean>) => {
            state.estudoRestart.reexecucaoNaoEncadeada = action.payload;
        },
        addReexecucao: (state, action: PayloadAction<Array<Reexecucao>>) => {
            state.estudoRestart.reexecucoes = action.payload;
        },
        removeReexecucaoByIndex: (state, action: PayloadAction<number>) => {
            const idx = action.payload;
            if (idx >= 0 && idx < state.estudoRestart.reexecucoes.length) {
                state.estudoRestart.reexecucoes.splice(idx, 1);
            }
        },
        updatePrevsPartida: (state, action: PayloadAction<Array<UploadFile>>) => {
            state.encadeamentoSemanal.prevsPartida = action.payload;
        },
        updateRecuperacaoVolumes: (state, action: PayloadAction<Array<UploadFile>>) => {
            state.encadeamentoSemanal.recuperacaoVolumes = action.payload;
        },
        updateArquivoFatores: (state, action: PayloadAction<Array<UploadFile>>) => {
            state.ajusteArmazenamentoFinal.arquivoFatores = action.payload;
        }
    }
})

export const {
    setMesFimSemanal,
    setAnoFimSemanal,
    setRevisaoFim,
    setRodarDecompPartida,
    setAlterarVolumeDecompPartida,
    setRodarGevazpPartida,
    setAlterarVolume,
    setDataReferencia,
    addLimitesPLD,
    removeLimitePLDByIndex,
    setInformacoes,
    setPartidaQuente,
    setDataReferenciaRestart,
    setRevisaoPartidaQuente,
    setReexecucaoNaoEncadeada,
    addReexecucao,
    removeReexecucaoByIndex,
    updateRecuperacaoVolumes,
    updatePrevsPartida,
    updateArquivoFatores
} = informacoesGeraisSlice.actions;
export default informacoesGeraisSlice.reducer;
