import React, { useState, createContext } from 'react';

export const searchContext = createContext();

export const SearchProvider = (props) => {
  const [query, setQuery] = useState('');
  return (
    <searchContext.Provider value={[query, setQuery]}>
      {props.children}
    </searchContext.Provider>
  );
};
