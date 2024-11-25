import { Colors } from '@/constants/Colors';
import { lineHeight } from '@/constants/FontRules';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const onboardingImage = require('@/assets/images/onboarding.png');

export default function Index() {
  return (
    <ImageBackground
      style={styles.background}
      source={onboardingImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['transparent', '#050505']}
        style={styles.overlay}
        start={{ x: 0.5, y: 0.4 }}
        end={{ x: 0.5, y: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.heading}>
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text style={styles.text}>
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
          </View>

          <Link href="/(auth)/sign-in" asChild>
            <TouchableOpacity style={styles.button} activeOpacity={0.75}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.darkest,
    height: 536,
    zIndex: -2,
  },
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
    justifyContent: 'flex-end',
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
    marginVertical: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SoraSemiBold',
  },
});
