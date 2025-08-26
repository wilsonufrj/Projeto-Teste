import type { UploadFile } from "@cepel/cepel-react-components";


export interface GerenciadorPLTypes {
    gerenciadorPL: Array<UploadFile>
    grenciadorExternoProcessos: boolean
    comunicacaoDoisNiveis: boolean
    alocacaoMemoriaEna: boolean
    alocacaoCortesFCF: boolean
    armazenamentoLocalTemporario: number | string
}