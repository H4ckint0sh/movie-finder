import { createContext } from 'react';

const PreferencesContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  color: '#1ba1f2',
  setPrimaryColor: () => {},
});

export default PreferencesContext;
