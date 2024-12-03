import { create } from 'zustand';

interface FavoritesStore {
  favorites: string[];
  toggleFavorite: (coffeeId: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>()((set) => ({
  favorites: [],
  toggleFavorite: (coffeeId: string) => set((state) => {
    let newFavs = [];

    if (state.favorites.includes(coffeeId)) {
      newFavs = state.favorites.filter(cId => cId !== coffeeId);
    } else {
      newFavs = [...state.favorites, coffeeId];
    }

    return {favorites: newFavs};
  })
}));