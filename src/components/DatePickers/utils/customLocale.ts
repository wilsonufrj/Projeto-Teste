import { ptBR } from "date-fns/locale";

export const customLocale = {
  ...ptBR,
  localize: {
    ...ptBR.localize,
    day: (n: number) => ["D", "S", "T", "Q", "Q", "S", "S"][n],
    month: (n: number) =>
      [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ][n],
    monthShort: (n: number) =>
      [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ][n],
  },
};