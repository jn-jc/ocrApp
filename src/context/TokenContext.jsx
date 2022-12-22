import React, { createContext } from "react";

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  
  const [userToken, setUserToken] = React.useState('');

  return (
    <TokenContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </TokenContext.Provider>
  );
}