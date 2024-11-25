export type CoffeeCategory = 
'all' |
'machiato' | 
'latte' | 
'americano' |
'espresso' |
'deep-foam';

export type Coffee = {
  id: number;
  label: string;
  category: CoffeeCategory;
  image?: string;
}