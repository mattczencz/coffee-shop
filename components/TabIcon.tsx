import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  color: string;
  size: number;
  icon: keyof typeof Ionicons.glyphMap;
};

const TabIcon = ({ color, size, icon }: Props) => {
  return <Ionicons name={icon} size={size} color={color} />;
};

export default TabIcon;

const styles = StyleSheet.create({});
