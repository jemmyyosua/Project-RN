import 'react-native-gesture-handler'
import * as React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import {useFonts, Oswald_400Regular} from "@expo-google-fonts/oswald";
import Container from "./container";

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "Oswald_400Regular",
      },
    },
  };

  // Setup Custome Theme
  const colors = {
    extos: {
      1: "#f8f7f4",
      2: "#ffffff",
      3: "#bfcfdd",
      4: "#9eb6cb",
      5: "#7d9db9",
    },
    windcolor2 : {
      1: "#fff6c9",
      2: "#ecc20a",
      3: "#e59a3b",
      4: "#e2762d",
      5: "#f44336",
    },
  }

  const fonts = {
    fontweights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extrablack: 950,
    },
    fontsizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: colors,
    font : fonts,
    fontConfig,
    fonts: {
      heading: "Oswald",
      body: "Oswald",
      mono: "Oswald",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}