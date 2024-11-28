import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const HeaderBack = () => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.dismiss()}>
      <Ionicons name="chevron-back" size={24} />
    </TouchableOpacity>
  );
};

export default HeaderBack;
