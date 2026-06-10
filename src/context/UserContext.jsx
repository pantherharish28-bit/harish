import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('portfolio_user');
    return saved ? JSON.parse(saved) : { name: 'Harish' };
  });

  useEffect(() => {
    // Read ?user=Name query parameter on load to easily simulate logins
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');
    if (userParam) {
      const newUser = { name: userParam };
      setUser(newUser);
      localStorage.setItem('portfolio_user', JSON.stringify(newUser));
      // Clean query parameter from the browser URL bar smoothly
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const login = (name) => {
    const newUser = { name };
    setUser(newUser);
    localStorage.setItem('portfolio_user', JSON.stringify(newUser));
  };

  const logout = () => {
    // We can reset to Harish or clear
    const defaultUser = { name: 'Harish' };
    setUser(defaultUser);
    localStorage.setItem('portfolio_user', JSON.stringify(defaultUser));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
