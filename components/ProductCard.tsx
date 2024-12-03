import { Colors } from '@/constants/Colors';
import { coffeeCategories } from '@/constants/Data';
import { lineHeight } from '@/constants/FontRules';
import { Coffee } from '@/lib/types';
import { useFavoritesStore } from '@/store/favoritesStore';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  productInfo: Coffee;
  allowRemoveFromFavorites?: boolean;
};

const ProductCard = ({ productInfo, allowRemoveFromFavorites }: Props) => {
  const { toggleFavorite } = useFavoritesStore();
  const coffeeFilter = coffeeCategories.find(
    (c) => c.category === productInfo.category
  );

  const createRemoveFromFavoritesAlert = () => {
    Alert.alert(
      `Remove ${productInfo.name} from your favorites?`,
      'Are you sure you want to remove this item from your favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => toggleFavorite(productInfo.id),
        },
      ]
    );
  };

  return (
    <Link
      href={{
        pathname: '/(tabs)/(home)/product/[id]',
        params: { id: productInfo.id },
      }}
      asChild
    >
      <TouchableOpacity
        style={styles.card}
        onLongPress={
          allowRemoveFromFavorites ? createRemoveFromFavoritesAlert : undefined
        }
      >
        <ImageBackground
          source={productInfo.image}
          resizeMode="cover"
          style={{ borderRadius: 12, overflow: 'hidden' }}
        >
          <View style={styles.imageView}>
            <Text style={styles.rating}>
              <Ionicons name="star" color="#FBBE21" size={12} />{' '}
              {productInfo.rating ?? 4.8}
            </Text>
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.name}>{productInfo.name}</Text>
          <Text style={styles.category}>{coffeeFilter?.label}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    padding: 8,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderRadius: 16,
    gap: 8,
    flex: 1,
  },
  imageView: {
    alignItems: 'flex-end',
    height: 128,
    borderRadius: 12,
  },
  rating: {
    color: 'white',
    gap: 4,
    flexDirection: 'row',
    borderEndStartRadius: 24,
    backgroundColor: 'rgba(49, 49, 49, 0.5)',
    fontFamily: 'SoraSemiBold',
    fontSize: 12,
    lineHeight: lineHeight(12),
    padding: 8,
    alignItems: 'center',
  },
  name: {
    color: '#242424',
    fontSize: 16,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(16),
    marginBottom: 4,
  },
  category: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: 'SoraRegular',
    lineHeight: 12 * 1.2,
  },
});
