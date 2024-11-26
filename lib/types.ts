import { ImageSourcePropType } from 'react-native';

export type CoffeeCategory = 
'all' |
'machiato' | 
'latte' | 
'americano' |
'espresso' |
'deep-foam';

export type CoffeeFilter = {
  id: number;
  label: string;
  category: CoffeeCategory;
}

export type Coffee = {
  id: string;
  name: string;
  description: string;
  category: CoffeeCategory;
  image?: ImageSourcePropType;
  rating?: number;
  ingredients?: string;
  nutritionInfo?: string;
}