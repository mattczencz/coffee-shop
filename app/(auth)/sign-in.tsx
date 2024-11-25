import FormField from '@/components/FormField';
import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignInScreen() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.darkest]}
      style={styles.overlay}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.75 }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Text style={styles.heading}>Welcome back!</Text>
        </View>

        <FormField
          type="email-address"
          label="Email"
          value={form.email}
          handleChange={(e) => setForm({ ...form, email: e })}
        />

        <FormField
          type="visible-password"
          label="Password"
          value={form.password}
          handleChange={(e) => setForm({ ...form, password: e })}
          secureTextEntry={true}
        />

        <Link href="/(auth)/sign-in" asChild>
          <TouchableOpacity style={styles.button} activeOpacity={0.75}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <Link
            href="/(auth)/sign-up"
            style={{
              color: Colors.primary,
              fontFamily: 'SoraSemiBold',
              textDecorationLine: 'underline',
            }}
          >
            Sign up!
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'SoraSemiBold',
    lineHeight: lineHeight(32),
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    color: Colors.gray,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: lineHeight(14),
    fontFamily: 'SoraRegular',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SoraSemiBold',
  },
});
