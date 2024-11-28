import { coffees } from '@/constants/Data';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = coffees.find((c) => c.id === id);

  console.log(product);
  return (
    <View>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
