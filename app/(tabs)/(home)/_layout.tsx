import FavoriteButton from '@/components/FavoriteButton';
import HeaderBack from '@/components/HeaderBack';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

const DetailLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="products/[id]"
        options={{
          headerTitle: 'Details',
          headerLeft: () => <HeaderBack />,
          headerRight: () => <FavoriteButton />,
        }}
      />
    </Stack>
  );
};

export default DetailLayout;
