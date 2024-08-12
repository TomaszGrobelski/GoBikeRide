import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface IDateLocalizationProvider {
  children: React.ReactNode;
}
export default function DateLocalizationProvider({
  children
}: IDateLocalizationProvider) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
