import type { UploadFile } from "@cepel/cepel-react-components";

export interface EncadeamentoSemanalTypes {
    mesFimSemanal: string,
    anoFimSemanal: string,
    revisaoFim: string,
    rodarDecompPartida: boolean,
    alterarVolumeDecompPartida: boolean,
    alterarVolume: number | string,
    dataReferencia: string,
    prevsPartida: UploadFile[],
    rodarGevazpPartida: boolean,
    recuperacaoVolumes: UploadFile[]
}