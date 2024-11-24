import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text style={styles.text}>
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.75}
            onPress={() => alert('Onboarding')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#050505',
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
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'semibold',
    color: 'white',
    marginBottom: 8,
  },
  text: {
    color: '#A2A2A2',
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
    marginTop: 32,
    marginBottom: 52,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'semibold',
  },
});
