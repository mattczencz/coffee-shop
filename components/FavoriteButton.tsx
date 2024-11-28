import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setLiked((state) => !state)}
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
