import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';
import { CoffeeCategory, CoffeeFilter } from '@/lib/types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  active: boolean;
  coffeeInfo: CoffeeFilter;
  handlePress: (category: CoffeeCategory) => void;
};

const CategoryButton = ({
  active,
  coffeeInfo: { label, category },
  handlePress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(category)}
      activeOpacity={0.75}
      style={{
        ...styles.button,
        backgroundColor: active ? Colors.primary : 'rgba(237, 237, 237, 0.35)',
      }}
    >
      <Text
        style={{
          ...styles.label,
          color: active ? 'white' : Colors.dark,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(14),
  },
});
