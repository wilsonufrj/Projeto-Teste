import { createSlice } from "@reduxjs/toolkit";
import type { EncadeamentoSemanalTypes } from "../types/EncadeamentoSemanalType";
import type { LimitesPLDTypes } from "../types/LimitesPLDType";
import type { AjusteArmazenamentoFinalType } from "../types/AjusteArmazenamentoFinalType";
import type { EstudoRestartType } from "../types/EstudoRestartType";

interface InformacoesGeraisType{
    encadeamentoSemanal: EncadeamentoSemanalTypes,
    limitesPLD: LimitesPLDTypes,
    ajusteArmazenamentoFinal: AjusteArmazenamentoFinalType,
    estudoRestart: EstudoRestartType
}

const initialState:InformacoesGeraisType = {
    encadeamentoSemanal:{} as EncadeamentoSemanalTypes,
    limitesPLD:{} as LimitesPLDTypes,
    ajusteArmazenamentoFinal: {} as AjusteArmazenamentoFinalType,
    estudoRestart: {} as EstudoRestartType
}

const informacoesGeraisSlice = createSlice({
    name:'informacoesGerais',
    initialState,
    reducers:{}
})

export const {} = informacoesGeraisSlice.actions;
export default informacoesGeraisSlice.reducer;
