import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

export const calculateTimeDifference = (pastDate: Date): string => {
  const currentDate = new Date();
  const seconds = differenceInSeconds(currentDate, pastDate);

  if (seconds < 60) {
    return `${seconds} ${pluralize(seconds, 'sekunda', 'sekundy', 'sekund')} temu`;
  }

  const minutes = differenceInMinutes(currentDate, pastDate);
  if (minutes < 60) {
    return `${minutes} ${pluralize(minutes, 'minuta', 'minuty', 'minut')} temu`;
  }

  const hours = differenceInHours(currentDate, pastDate);
  if (hours < 24) {
    return `${hours} ${pluralize(hours, 'godzina', 'godziny', 'godzin')} temu`;
  }

  const days = differenceInDays(currentDate, pastDate);
  return `${days} ${pluralize(days, 'dzień', 'dni', 'dni')} temu`;
};

const pluralize = (count: number, singular: string, plural: string, pluralMore: string): string => {
  if (count === 1) {
    return singular;
  } else if (count > 1 && count < 5) {
    return plural;
  } else {
    return pluralMore;
  }
};