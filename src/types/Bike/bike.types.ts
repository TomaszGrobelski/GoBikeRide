import { IComponents } from './Components/components.types';

export interface IBike {
  id: number;
  userId: number;
  brand: string;
  model: string;
  components?: IComponents[];
}
