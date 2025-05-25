import { Country } from '../types/Country';

export type RootStackParamList = {
  Home: undefined;
  Detail: { country: Country };
};
