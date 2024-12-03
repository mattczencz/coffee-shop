import CategoryButton from '@/components/CategoryButton';
import ProductGrid from '@/components/ProductGrid';
import SearchHero from '@/components/SearchHero';
import { Colors } from '@/constants/Colors';
import { coffeeCategories, coffees } from '@/constants/Data';
import { CoffeeCategory } from '@/lib/types';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [currentCategory, setCurrentCategory] = useState<CoffeeCategory>('all');
  const filteredCoffees = useMemo(
    () =>
      currentCategory === 'all'
        ? coffees
        : coffees.filter((c) => c.category === currentCategory),
    [currentCategory]
  );

  const changeCategory = (category: CoffeeCategory) =>
    setCurrentCategory(category);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
      <SearchHero />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryButtonsContainer}
      >
        <CategoryButton
          active={currentCategory === 'all'}
          coffeeInfo={{ id: -1, label: 'All Coffee', category: 'all' }}
          handlePress={changeCategory}
        />
        {coffeeCategories.map((c) => (
          <CategoryButton
            key={c.id}
            active={currentCategory === c.category}
            coffeeInfo={c}
            handlePress={changeCategory}
          />
        ))}
      </ScrollView>

      <ProductGrid products={filteredCoffees} />

      {/* 
        -- Uncomment to test not-found route -- 
        <ProductCard
          productInfo={{ id: '', name: '', description: '', category: 'latte' }}
        /> 
      */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.offWhite,
  },
  categoryButtonsContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 16,
  },
});
