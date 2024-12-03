import ProductGrid from '@/components/ProductGrid';
import { Colors } from '@/constants/Colors';
import { coffees } from '@/constants/Data';
import { useFavoritesStore } from '@/store/favoritesStore';
import { ScrollView, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  const { favorites } = useFavoritesStore();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24, ...styles.body }}>
      <ProductGrid
        products={coffees.filter((c) => favorites.includes(c.id))}
        allowFavoritesRemoval
      />
    </ScrollView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.offWhite,
    flex: 1,
  },
  categoryButtonsContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 16,
  },
});
