import React, { createContext, useState, useContext } from 'react';

const HamburgerContext = createContext();

export const useHamburger = () => useContext(HamburgerContext);

export const HamburgerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen(prev => !prev);
  const closeHamburger = () => setIsOpen(false);

  return (
    <HamburgerContext.Provider value={{ isOpen, toggleHamburger, closeHamburger }}>
      {children}
    </HamburgerContext.Provider>
  );
};
