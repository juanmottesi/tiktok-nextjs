'use client';

import { createContext, useContext, useState } from "react";

type UserContextType = {
  user: any | null;
  token?: string;
  login: (user: any, token: string) => void;
  logout: () => void;
  updateUser: (user: any) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  token: undefined,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
  tokenData?: string;
  userData: any | null;
};

const UserProvider = ({ children, tokenData, userData }: UserProviderProps) => {
  const [user, setUser] = useState(userData);
  const [token, setToken] = useState(tokenData);

  const login = (newUser: any, token: string) => {
    setUser(newUser);
    setToken(token);
    document.cookie = `token=${token}`;
  }

  const logout = () => {
    setUser(null);
    setToken(undefined);
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }

  const updateUser = (newUser: any) => {
    setUser(newUser);
  }
  
  return (
    <UserContext.Provider value={{ user, token, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;