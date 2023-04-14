import { createContext } from 'react';
import { ThemeType } from '../constants/Theme';

const ThemeContext = createContext<ThemeType | null>(null);

export default ThemeContext;