import { Coffee, CoffeeFilter } from '@/lib/types';

export const coffeeCategories: CoffeeFilter[] = [
  {id: 0, label: 'Machiato', category: 'machiato'},
  {id: 1, label: 'Americano', category: 'americano'},
  {id: 2, label: 'Deep Foam', category: 'deep-foam'},
  {id: 3, label: 'Espresso', category: 'espresso'},
  {id: 4, label: 'Latte', category: 'latte'},
];

export const coffees: Coffee[] = [
  {
    id: "a7f9d2b1",
    name: "Classic Macchiato",
    description: "A rich espresso topped with a dollop of foam for a bold start to your day.",
    category: "machiato",
    image: require('@/assets/images/products/1.jpg'),
    rating: 4.5,
    ingredients: "Espresso, Milk Foam",
    nutritionInfo: "Calories: 50, Protein: 1g, Fat: 2g, Carbs: 5g",
  },
  {
    id: "f3b2e89c",
    name: "Vanilla Latte",
    description: "Creamy latte infused with a hint of vanilla, perfect for a sweet pick-me-up.",
    category: "latte",
    image: require('@/assets/images/products/2.jpg'),
    rating: 4.8,
    ingredients: "Espresso, Steamed Milk, Vanilla Syrup",
    nutritionInfo: "Calories: 150, Protein: 5g, Fat: 6g, Carbs: 20g",
  },
  {
    id: "c5a91b43",
    name: "Bold Americano",
    description: "A smooth blend of espresso and hot water for a classic coffee experience.",
    category: "americano",
    image: require('@/assets/images/products/3.jpg'),
    rating: 4.2,
    ingredients: "Espresso, Water",
    nutritionInfo: "Calories: 15, Protein: 0g, Fat: 0g, Carbs: 0g",
  },
  {
    id: "e93af76d",
    name: "Velvet Espresso",
    description: "Pure, intense espresso shot with a velvety crema for coffee purists.",
    category: "espresso",
    image: require('@/assets/images/products/4.jpg'),
    rating: 4.7,
    ingredients: "Espresso",
  },
  {
    id: "d12c8f4e",
    name: "Deep Foam Delight",
    description: "Luxurious coffee with a thick layer of foam and a creamy texture.",
    category: "deep-foam",
    image: require('@/assets/images/products/5.jpg'),
    rating: 4.9,
    ingredients: "Espresso, Steamed Milk, Milk Foam",
    nutritionInfo: "Calories: 120, Protein: 4g, Fat: 5g, Carbs: 10g",
  },
  {
    id: "b47f2c8a",
    name: "Caramel Macchiato",
    description: "A delightful mix of espresso, milk, and caramel syrup for a sweet treat.",
    category: "machiato",
    image: require('@/assets/images/products/1.jpg'),
    rating: 4.6,
    ingredients: "Espresso, Steamed Milk, Caramel Syrup",
  },
  {
    id: "ac6f842e",
    name: "Iced Vanilla Latte",
    description: "A refreshing iced version of the classic vanilla latte, perfect for hot days.",
    category: "latte",
    image: require('@/assets/images/products/2.jpg'),
    rating: 4.3,
    ingredients: "Espresso, Milk, Vanilla Syrup, Ice",
  },
  {
    id: "fbc32a8d",
    name: "Americano with a Twist",
    description: "A unique take on the americano with a hint of cinnamon for added warmth.",
    category: "americano",
    image: require('@/assets/images/products/3.jpg'),
    rating: 4.1,
    nutritionInfo: "Calories: 20, Protein: 0g, Fat: 0g, Carbs: 1g",
  },
  {
    id: "dfe892b1",
    name: "Espresso Con Panna",
    description: "Rich espresso topped with a dollop of whipped cream for extra indulgence.",
    category: "espresso",
    image: require('@/assets/images/products/4.jpg'),
    rating: 4.4,
    ingredients: "Espresso, Whipped Cream",
    nutritionInfo: "Calories: 80, Protein: 1g, Fat: 4g, Carbs: 8g",
  },
];
