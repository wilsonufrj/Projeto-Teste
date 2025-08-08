export type StepValidationResult = {
    isValid: boolean;
    errors: ValidationError[];
};

export type ValidationError = {
    key: string;
    message: string;
}

export enum ValidationSection {
    Deck = 0,
    InformacoesGerais = 1,
    Newave = 2,
    Gevazp = 3,
    Decomp = 4,
    Desem = 5,
    Execucao = 6,
}