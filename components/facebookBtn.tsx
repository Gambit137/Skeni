import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import ThemeContext from '../context/ThemeContext';

type ButtonProps = {
  onPress: () => void;
  imageSr: any;
  title: string;
};

export function ThemedButton2({ onPress, imageSr, title }: ButtonProps) {
  const theme = useContext(ThemeContext)!;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: theme.colors.primary }]}>
      <Image source={imageSr} style={styles.image} />
      <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 18,
  },
  image: {
    width:50,
    height: 50,
    marginRight: 16,
    marginLeft: 16,
  },
});