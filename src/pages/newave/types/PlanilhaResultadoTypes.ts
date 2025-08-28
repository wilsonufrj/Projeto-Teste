import type { SwitchItem } from "@cepel/cepel-react-components";

export interface PlanilhaResultadosTypes{
    despachoUsinasGNL:Array<SwitchItem>
    custoMarginalOperacao:Array<SwitchItem>
    defictEnergia:Array<SwitchItem>
    parcelaControlavelENA:Array<SwitchItem>
    vertimentoControlavel:Array<SwitchItem>
    geracaoHidraulica:Array<SwitchItem>
    geracaoTermica:Array<SwitchItem>
    intercambioSubsistema:Array<SwitchItem>
    mercadoLiquido:Array<SwitchItem>
    vertimentoTurbinavel:Array<SwitchItem>
}