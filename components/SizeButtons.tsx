import { lineHeight } from '@/constants/FontRules';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';

const sizes = ['S', 'M', 'L'];

const SizeButtons = () => {
  return (
    <View style={styles.sizeWrapper}>
      <Text style={styles.sectionTitle}>Size</Text>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        {sizes.map((s) => (
          <TouchableOpacity style={styles.sizeBtn} key={`size-btn-${s}`}>
            <Text style={styles.sizeBtnLabel}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SizeButtons;

const styles = StyleSheet.create({
  sectionTitle: {
    color: Colors.darkest,
    fontSize: 16,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(16),
  },
  sizeWrapper: {
    gap: 16,
    marginBottom: 24,
  },
  sizeBtn: {
    backgroundColor: 'white',
    borderColor: '#e3e3e3',
    borderRadius: 12,
    borderWidth: 1,
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeBtnLabel: {
    color: Colors.darkest,
    fontSize: 14,
    fontFamily: 'SoraRegular',
    lineHeight: lineHeight(14),
    textAlign: 'center',
  },
});
