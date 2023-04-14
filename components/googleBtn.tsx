import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import ThemeContext from "../context/ThemeContext";

type ButtonProps = {
  onPress: () => void;
  imageSr: any;
  title: string;
};

export function ThemedButton({ onPress, imageSr, title }: ButtonProps) {
  const theme = useContext(ThemeContext)!;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.colors.accent }]}
    >
      <Image source={imageSr} style={styles.image} />
      <Text style={[styles.text, { color: theme.colors.primary }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: "80%",
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    marginLeft: 16,
  },
});
