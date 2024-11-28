import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const HeaderBack = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.dismiss()}
      activeOpacity={0.75}
      style={{ padding: 10 }}
    >
      <Ionicons name="chevron-back" size={24} />
    </TouchableOpacity>
  );
};

export default HeaderBack;
