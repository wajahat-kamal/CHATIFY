import { createContext, useContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {}

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider