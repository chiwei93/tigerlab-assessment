import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarContextProvider: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const context = { isSidebarOpen, openSidebar, closeSidebar };

  return (
    <SidebarContext.Provider value={context}>
      {children}
    </SidebarContext.Provider>
  );
};

export default function useSidebarContext() {
  return useContext(SidebarContext);
}
