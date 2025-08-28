import type { UploadFile } from "@cepel/cepel-react-components";

export interface InformacoesPrevisoesTypes{
    tipoMensal:number,
    nomeArquivoMensal:string,
    arquivoMensal:Array<UploadFile>
    tipoSemanal:number,
    nomeArquivoSemanal:string,
    arquivoSemanal:Array<UploadFile>
}