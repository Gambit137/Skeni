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
    primary: '#EDE8DD',
    accent: '#013849',
    background: '#EDE8DD',
    surface: '#ffffff',
    error: '#B00020',
    text: '#013849',
  },
};

export const CustomDarkTheme: ThemeType = {
  colors: {
    primary: '#013849',
    accent: '#EDE8DD',
    background: '#013849',
    surface: '#121212',
    error: '#CF6679',
    text: '#EDE8DD',
  },
};