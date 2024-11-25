import { lineHeight } from '@/constants/FontRules';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  label: string;
  value: any;
  type: KeyboardTypeOptions;
  viewStyles?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  handleChange: (text: string) => void;
};

const FormField = ({
  label,
  value,
  type,
  viewStyles,
  secureTextEntry,
  handleChange,
}: Props) => {
  return (
    <View style={viewStyles ?? styles.defaultViewStyles}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        value={value}
        style={styles.formInput}
        keyboardType={type}
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  defaultViewStyles: {
    width: '100%',
    marginBottom: 32,
  },
  formInput: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  formLabel: {
    color: 'white',
    fontFamily: 'SoraSemiBold',
    fontSize: 14,
    lineHeight: lineHeight(14),
    marginBottom: 8,
  },
});
