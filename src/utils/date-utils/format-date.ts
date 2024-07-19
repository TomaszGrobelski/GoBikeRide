import { format } from 'date-fns';

export const convertToDdMmYyyyFormat = (date: Date): string => {
  return format(date, 'dd.MM.yyyy');
};
