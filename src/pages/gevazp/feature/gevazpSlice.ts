import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InformacoesPrevisoesTypes } from '../types/InformacoesPrevisoesTypes';
import type { UploadFile } from '@cepel/cepel-react-components';

interface GevazpTypes {
    informacoesPrevisoes: InformacoesPrevisoesTypes
}

const initialState: GevazpTypes = {
    informacoesPrevisoes: {
        arquivoMensal: [],
        arquivoSemanal: [],
        nomeArquivoMensal: '',
        nomeArquivoSemanal: '',
        tipoMensal: '',
        tipoSemanal: ''
    }
};

export const gevazpSlice = createSlice({
    name: 'gevazp',
    initialState,
    reducers: {
        updateArquivoMensal(state, action: PayloadAction<Array<UploadFile>>) {
            state.informacoesPrevisoes.arquivoMensal = action.payload;
        },
        updateArquivoSemanal(state, action: PayloadAction<Array<UploadFile>>) {
            state.informacoesPrevisoes.arquivoSemanal = action.payload;
        },
        setNomeArquivoMensal(state, action: PayloadAction<string>) {
            state.informacoesPrevisoes.nomeArquivoMensal = action.payload;
        },
        setNomeArquivoSemanal(state, action: PayloadAction<string>) {
            state.informacoesPrevisoes.nomeArquivoSemanal = action.payload;
        },
        setTipoMensal(state, action: PayloadAction<number>) {
            state.informacoesPrevisoes.tipoMensal = action.payload;
        },
        setTipoSemanal(state, action: PayloadAction<number>) {
            state.informacoesPrevisoes.tipoSemanal = action.payload;
        }
    },
});

export const {
    updateArquivoMensal,
    updateArquivoSemanal,
    setNomeArquivoMensal,
    setNomeArquivoSemanal,
    setTipoMensal,
    setTipoSemanal
} = gevazpSlice.actions;

export default gevazpSlice.reducer;