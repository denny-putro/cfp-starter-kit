// Main Imports
import React, { createContext, useState } from "react";

// Initially create the context so it knows what kind of variable inside
export const GlobalContext = createContext({
  name: "",
  mission: "",
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [context, setContext] = useState({
    name: "",
    mission: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;