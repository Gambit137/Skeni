export type ThemeType = {
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    error: string;
    text: string;
  };
};

export const CustomDefaultTheme: ThemeType = {
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#ffffff',
    error: '#B00020',
    text: '#000000',
  },
};

export const CustomDarkTheme: ThemeType = {
  colors: {
    primary: '#bb86fc',
    accent: '#03dac4',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    text: '#ffffff',
  },
};