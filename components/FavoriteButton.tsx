import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity onPress={() => setLiked((state) => !state)}>
      <Ionicons
        name={liked ? 'heart' : 'heart-outline'}
        color="red"
        size={24}
      />
    </TouchableOpacity>
  );
};
export default FavoriteButton;
const styles = StyleSheet.create({});
