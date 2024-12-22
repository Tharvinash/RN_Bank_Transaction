import { createContext, PropsWithChildren, useContext, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert } from 'react-native';

type BiometricsContext = {
  isAuthenticated: boolean;
  authenticate: () => Promise<void>;
};

const BiometricsContext = createContext<BiometricsContext>({
  isAuthenticated: false,
  authenticate: async () => {},
});

const BiometricProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
      if (!isBiometricSupported) {
        Alert.alert(
          'Biometric Authentication',
          'Biometric authentication is not supported on this device.'
        );
        return;
      }

      const response = await LocalAuthentication.authenticateAsync();
      if (response.success) {
        setIsAuthenticated(true);
      } else {
        Alert.alert(
          'Authentication Failed',
          'Biometric authentication was unsuccessful.'
        );
      }
    } catch (error) {
      Alert.alert(
        'Authentication Error',
        'An error occurred while attempting to authenticate.'
      );
    }
  };

  return (
    <BiometricsContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricProvider;

export const useBiometrics = () => useContext(BiometricsContext);
