import React, { createContext } from "react";

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  
  const [userToken, setUserToken] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <TokenContext.Provider value={{ userToken, setUserToken, isLoading, setIsLoading }}>
      {children}
    </TokenContext.Provider>
  );
}