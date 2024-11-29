import ContentSection from '@/components/ContentSection';
import SizeButtons from '@/components/SizeButtons';
import { Colors } from '@/constants/Colors';
import { coffeeCategories, coffees } from '@/constants/Data';
import { lineHeight } from '@/constants/FontRules';
import { Ionicons } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = coffees.find((c) => c.id === id);

  if (!product) return <Redirect href="/+not-found" />;

  const category = coffeeCategories.find(
    (c) => c.category === product.category
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} resizeMode="cover" style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>

      {category && <Text style={styles.category}>{category.label}</Text>}

      <View style={styles.ratingWrapper}>
        <Ionicons name="star" color="#FBBE21" size={20} />
        <Text style={styles.ratingText}>
          {product.rating !== undefined ? product.rating : 'Unrated'}
        </Text>
      </View>

      <View style={styles.divider} />

      <ContentSection title="Description" desc={product.description} />

      <ContentSection
        title="Ingredients"
        desc={product.ingredients ?? 'No ingredient info available'}
      />

      <ContentSection
        title="Nutrition"
        desc={product.nutritionInfo ?? 'No nutrition info available'}
      />

      <SizeButtons />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.offWhite,
  },
  image: {
    width: '100%',
    height: 202,
    borderRadius: 16,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'SoraSemiBold',
    fontSize: 20,
    lineHeight: lineHeight(20),
    color: Colors.darkest,
    marginBottom: 4,
  },
  category: {
    fontFamily: 'SoraRegular',
    fontSize: 12,
    lineHeight: 12 * 1.2,
    color: Colors.gray,
    marginBottom: 16,
  },
  ratingWrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'SoraSemiBold',
    fontSize: 16,
    color: Colors.darkest,
  },
  divider: {
    borderWidth: 0.5,
    marginHorizontal: 16,
    borderColor: Colors.gray,
    marginVertical: 16,
  },
});
