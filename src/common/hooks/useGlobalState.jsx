import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext([undefined, () => {}]);

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};