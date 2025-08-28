export interface Reexecucao {
    dataInicio: string;
    dataFim: string;
}
export interface EstudoRestartTypes {
    partidaQuente: boolean;
    dataReferencia: string;
    revisaoPartidaQuente: string;
    reexecucaoNaoEncadeada: boolean;
    reexecucoes: Array<Reexecucao>;
}