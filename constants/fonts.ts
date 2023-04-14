import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Signika-Light": require("../assets/fonts/Signika/static/Signika-Light.ttf"),
        "Signika-Regular": require("../assets/fonts/Signika/static/Signika-Regular.ttf"),
        "Signika-Medium": require("../assets/fonts/Signika/static/Signika-Medium.ttf"),
        "Signika-SemiBold": require("../assets/fonts/Signika/static/Signika-SemiBold.ttf"),
        "Signika-Bold": require("../assets/fonts/Signika/static/Signika-Bold.ttf"),
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export const fontSizes = {
  small: 12,
  regular: 16,
  large: 24,
  extraLarge: 32,
  mainTitle: 50,
};

export const fontFamilies = {
  light: "Signika-Light",
  regular: "Signika-Regular",
  medium: "Signika-Medium",
  semiBold: "Signika-SemiBold",
  bold: "Signika-Bold",
};

export const fonts = StyleSheet.create({
  small: {
    fontSize: fontSizes.small,
  },
  regular: {
    fontSize: fontSizes.regular,
  },
  large: {
    fontSize: fontSizes.large,
  },
  mainTitle: {
    fontSize: fontSizes.mainTitle,
  },
  extraLarge: {
    fontSize: fontSizes.extraLarge,
  },
  regularFont: {
    fontFamily: fontFamilies.regular,
  },
  boldFont: {
    fontFamily: fontFamilies.bold,
  },
  lightFont: {
    fontFamily: fontFamilies.light,
  },
  semiBoldFont: {
    fontFamily: fontFamilies.semiBold,
  },
  mediumFont: {
    fontFamily: fontFamilies.medium,
  },
});

export const loadCustomFonts = () => {
  return Font.loadAsync({
    "Signika-Light": require("../assets/fonts/Signika/static/Signika-Light.ttf"),
    "Signika-Regular": require("../assets/fonts/Signika/static/Signika-Regular.ttf"),
    "Signika-Medium": require("../assets/fonts/Signika/static/Signika-Medium.ttf"),
    "Signika-SemiBold": require("../assets/fonts/Signika/static/Signika-SemiBold.ttf"),
    "Signika-Bold": require("../assets/fonts/Signika/static/Signika-Bold.ttf"),
  });
};
