import type { InformacoesGeraisType } from "../feature/informacoesGeraisSlice";

export const InformacoesGeraisMock: InformacoesGeraisType = {
    encadeamentoSemanal: {
        mesFimSemanal: '',
        anoFimSemanal: '',
        revisaoFim: '',
        rodarDecompPartida: false,
        alterarVolumeDecompPartida: false,
        rodarGevazpPartida: false,
        alterarVolume: '',
        dataReferencia: ''
    },
    limitesPLD: [
        {
            id: 1,
            periodo: '',
            maximo: '23.0',
            minimo: '21.0'
        },
        {
            id: 2,
            periodo: '',
            maximo: '26.0',
            minimo: '19.0'
        },

    ],
    ajusteArmazenamentoFinal: {
        informacao: null,
        arquivoDeFatores: ''
    },
    estudoRestart: {}

}