import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';
import { Ionicons } from '@expo/vector-icons';

const SearchHero = () => {
  return (
    <LinearGradient
      colors={['#111', Colors.dark]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.select}>
          Bilzen, Tanjungbalai <Ionicons name="chevron-down" size={14} />
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SearchHero;

const styles = StyleSheet.create({
  container: {
    height: 280,
    padding: 24,
  },
  label: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: 'SoraRegular',
    lineHeight: 12 * 1.2,
    marginBottom: 8,
  },
  select: {
    color: '#D8D8D8',
    fontSize: 14,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(14),
    marginBottom: 24,
  },
});
