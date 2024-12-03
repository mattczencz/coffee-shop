import FavoriteButton from '@/components/FavoriteButton';
import HeaderBack from '@/components/HeaderBack';
import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';

const DetailLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="product/[id]"
        options={{
          headerTitle: 'Details',
          headerTitleStyle: {
            fontFamily: 'SoraSemiBold',
            fontSize: 16,
          },
          headerStyle: { backgroundColor: Colors.offWhite },
          headerShadowVisible: false,
          headerLeft: () => <HeaderBack />,
          headerRight: () => <FavoriteButton />,
        }}
      />
    </Stack>
  );
};

export default DetailLayout;
