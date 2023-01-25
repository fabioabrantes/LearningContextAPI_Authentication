import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './src/context/AuthProvider';

import {Load} from './src/components/Load';

import {Routes} from './src/routes';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {THEME} from './src/global/styles/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
 return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      
      <ThemeProvider theme={THEME}>
        <AuthProvider>
          {
            !fontsLoaded ? <Load/> : <Routes/>
          }
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}