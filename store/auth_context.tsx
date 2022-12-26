import React, { createContext, useState, useEffect } from 'react';
import { Props } from '../types';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculatedTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const expiredTime = new Date(expirationTime).getTime();
  const remainingTime = expiredTime - currentTime;
  console.log('remainigTime:: ', remainingTime);
  return remainingTime;
};

export const AuthContextProvider = (props: Props) => {
  const [initialToken, setInitialToken] = useState(null);
  const [token, setToken] = useState<string | null>(initialToken);

  const userIsLoggedIn = !!token;
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);

    const remainingTime = calculatedTime(expirationTime);

    setTimeout(logoutHandler, 3000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  useEffect(() => {
    setInitialToken(localStorage.getItem('token'));
    setToken(localStorage.getItem('token'));
  }, [loginHandler, loginHandler]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
