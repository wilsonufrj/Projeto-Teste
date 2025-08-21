export interface Reexecucao{
    dataInicio:string,
    dataFim:string
}
export interface EstudoRestartType{
    partidaQuente:boolean,
    dataReferencia:string,
    revisaoPartidaQuente:string,
    reexecucaoNaoEncadeada:boolean,
    reexecucoes:Array<Reexecucao>
}