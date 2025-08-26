export const revisoes = ['RV0', 'RV1', 'RV2', 'RV3', 'RV4'];

export const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

export const years = Array.from({ length: 4 }, (_, i) => (i + 2020).toString());

export const formatarDDMMYYYY = (input: string | Date) =>
    new Date(input).toLocaleDateString("pt-BR", { timeZone: "UTC" });

