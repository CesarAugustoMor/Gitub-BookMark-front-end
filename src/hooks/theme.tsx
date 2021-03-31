import React, { createContext, useCallback, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from './usePersistedState';

interface ThemeContextData {
  theme: DefaultTheme;
  toogleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = useCallback(() => {
    setTheme(oldTheme => (oldTheme.title === 'light' ? dark : light));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const contex = useContext(ThemeContext);

  return contex;
}
