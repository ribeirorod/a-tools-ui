import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isLeftSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isLeftSidebarOpen, toggleLeftSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}