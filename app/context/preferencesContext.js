import { createContext } from 'react';

const PreferencesContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default PreferencesContext;
