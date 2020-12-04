import { createContext } from 'react';

const PreferencesContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export default PreferencesContext;
