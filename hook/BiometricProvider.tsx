import { createContext, PropsWithChildren, useContext, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

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
    // const enrolled = await LocalAuthentication.getEnrolledLevelAsync();
    // const supported =
    //   await LocalAuthentication.supportedAuthenticationTypesAsync();

    // console.log(enrolled, supported);

    const response = await LocalAuthentication.authenticateAsync();
    if (response.success) {
      setIsAuthenticated(true);
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
