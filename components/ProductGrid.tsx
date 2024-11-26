import { Coffee } from '@/lib/types';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';

type Props = {
  products: Coffee[];
};

const ProductGrid = ({ products }: Props) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.grid}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => <ProductCard productInfo={item} />}
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
