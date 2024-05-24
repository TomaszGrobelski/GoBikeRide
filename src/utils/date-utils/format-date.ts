import { format } from 'date-fns';

interface Props {
  date: Date;
}

export const convertToDdMmYyyyFormat = ({ date }: Props): string => {
  return format(date, 'dd/MM/yyyy');
};
