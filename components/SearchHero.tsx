import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';
import { Ionicons } from '@expo/vector-icons';

const banner = require('@/assets/images/banner.png');

const SearchHero = () => {
  return (
    <View style={{ marginBottom: 70, position: 'relative' }}>
      <LinearGradient
        colors={['#111', Colors.dark]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.container} edges={['top']}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.select}>
            Bilzen, Tanjungbalai <Ionicons name="chevron-down" size={14} />
          </Text>

          <View style={styles.searchWrapper}>
            <View style={styles.searchField}>
              <Ionicons name="search" size={20} color="white" />
              <TextInput
                placeholder="Search coffee"
                placeholderTextColor={Colors.gray}
                style={{ color: 'white' }}
              />
            </View>

            <TouchableOpacity style={styles.filterButton} activeOpacity={0.75}>
              <Ionicons name="filter" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <Image source={banner} style={styles.banner} />
    </View>
  );
};

export default SearchHero;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 93,
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
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  searchField: {
    backgroundColor: '#2a2a2a',
    flexDirection: 'row',
    flex: 1,
    padding: 16,
    gap: 8,
    borderRadius: 12,
  },
  filterButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  banner: {
    position: 'absolute',
    bottom: -70,
    left: 24,
    right: 24,
    width: 'auto',
    resizeMode: 'contain',
    height: 140,
  },
});
