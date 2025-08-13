import { format, parse, isValid, isAfter } from "date-fns";


export const formatDate = (date: Date | null) =>
  date ? format(date, "dd/MM/yyyy") : "";

export const parseDate = (dateStr: string) => {
  const parsed = parse(dateStr, "dd/MM/yyyy", new Date());
  return isValid(parsed) ? parsed : null;
};