import { Coffee } from '@/lib/types';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';

type Props = {
  products: Coffee[];
  allowFavoritesRemoval?: boolean;
};

const ProductGrid = ({ products, allowFavoritesRemoval = false }: Props) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.grid}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => (
        <ProductCard
          productInfo={item}
          allowRemoveFromFavorites={allowFavoritesRemoval}
        />
      )}
      scrollEnabled={false}
      numColumns={2}
    />
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  grid: {
    marginHorizontal: 24,
    gap: 24, // row gap
  },
  column: {
    position: 'relative',
    flex: 1,
    gap: 16, // column gap
  },
});
