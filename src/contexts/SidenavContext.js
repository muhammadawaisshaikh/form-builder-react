import React, { createContext, useState } from "react";

export const SidenavContext = createContext();

const SidenavContextProvider = props => {
  const [sideNav, setSideNav] = useState(0);

  const changeSidenavState = state => {
    setSideNav(state);
  };
  
  return (
    <SidenavContext.Provider value={{ sideNav, changeSidenavState }}>
      {props.children}
    </SidenavContext.Provider>
  );
};

export default SidenavContextProvider;