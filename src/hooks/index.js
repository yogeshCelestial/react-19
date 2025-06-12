import { createContext, useState } from "react";

const FirstContext = createContext(null);

export const FirstContextComponent = ({ children }) => {
  const [newState, setNewState] = useState("hello World!");

  const value = {
    newState,
    setNewState,
  };

  return (
    <FirstContext.Provider value={value}>{children}</FirstContext.Provider>
  );
};

export default FirstContext;
