import { IComponents } from './Components/components.types';

export interface IBike {
  id: number;
  userId: string;
  brand: string;
  model: string;
  components?: IComponents[];
}
