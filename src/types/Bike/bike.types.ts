import { IComponents } from './Components/components.types';

export interface IBike {
  userId: number;
  brand: string;
  model: string;
  components?: IComponents[];
}
