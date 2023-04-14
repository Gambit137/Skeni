import React, { useContext, createContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, useColorScheme, ActivityIndicator, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCustomFonts, fonts, fontFamilies } from './constants/fonts';
import { CustomDefaultTheme, CustomDarkTheme, ThemeType } from './constants/Theme';
import { ThemedButton } from './components/googleBtn';
import { ThemedButton2 } from './components/facebookBtn';
import ThemeContext from './context/ThemeContext';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const fontsLoaded = useCustomFonts();
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? CustomDefaultTheme : CustomDarkTheme;
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'Signika-Light': require('./assets/fonts/Signika/static/Signika-Light.ttf'),
          'Signika-Regular': require('./assets/fonts/Signika/static/Signika-Regular.ttf'),
          'Signika-Medium': require('./assets/fonts/Signika/static/Signika-Medium.ttf'),
          'Signika-SemiBold': require('./assets/fonts/Signika/static/Signika-SemiBold.ttf'),
          'Signika-Bold': require('./assets/fonts/Signika/static/Signika-Bold.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[fonts.mainTitle, fonts.semiBoldFont, { color: theme.colors.text }]}>Skeni</Text>
        <ThemedText />
        <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      </View>
      <View style={[styles.container2, { backgroundColor: theme.colors.background }]}>
        <ThemedButton
          onPress={() => {
            console.log('Button pressed');
          }}
          imageSr={require('./assets/googleIcn.png')}
          title="Nastavi sa Googlom"
        />
        <ThemedButton2
          onPress={() => {
            console.log('Button pressed');
          }}
            imageSr={require('./assets/facebookIcn.png')}
          title="Nastavi sa Facebookom"
        />
      </View>
    </ThemeContext.Provider>
  );
}

function ThemedText() {
  const theme = useContext(ThemeContext)!;
  return <Text style={{ color: theme.colors.text, fontSize: 18 }}>This is a themed app.</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  container2: {
flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 50,
  gap: 20,
},
});