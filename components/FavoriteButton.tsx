import { Colors } from '@/constants/Colors';
import { useFavoritesStore } from '@/store/favoritesStore';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

const FavoriteButton = () => {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const { id } = useGlobalSearchParams<{ id: string }>();
  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    setLiked((state) => !state);
    toggleFavorite(id);
  };

  useEffect(() => {
    setLiked(favorites.includes(id));
  }, [favorites]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.75}
      style={{ padding: 10 }}
    >
      <Ionicons
        name={liked ? 'heart' : 'heart-outline'}
        color={liked ? Colors.primary : Colors.dark}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
