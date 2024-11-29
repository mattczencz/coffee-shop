import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';

type Props = {
  title: string;
  desc: string;
};

const ContentSection = ({ title, desc }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{desc}</Text>
    </View>
  );
};

export default ContentSection;

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
    marginBottom: 24,
  },
  title: {
    color: Colors.darkest,
    fontSize: 16,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(16),
  },
  text: {
    color: Colors.gray,
    fontSize: 14,
    fontFamily: 'SoraRegular',
    lineHeight: lineHeight(14),
  },
});
