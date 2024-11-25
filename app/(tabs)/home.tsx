import CategoryButton from '@/components/CategoryButton';
import SearchHero from '@/components/SearchHero';
import { Colors } from '@/constants/Colors';
import { coffees } from '@/constants/Data';
import { CoffeeCategory } from '@/lib/types';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const [currentCategory, setCurrentCategory] = useState<CoffeeCategory>('all');
  const changeCategory = (category: CoffeeCategory) =>
    setCurrentCategory(category);

  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
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
          {coffees.map((c) => (
            <CategoryButton
              key={c.id}
              active={currentCategory === c.category}
              coffeeInfo={c}
              handlePress={changeCategory}
            />
          ))}
        </ScrollView>

        <View style={{ ...styles.placeholder, backgroundColor: Colors.gray }}>
          <Text>Current Category: {currentCategory}</Text>
        </View>
      </ScrollView>
    </>
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
  placeholder: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
