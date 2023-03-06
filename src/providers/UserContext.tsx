import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import {
  Ilogin,
  Iprovider,
  Iregister,
  IUserContext,
} from './@types';
import api from '../services/api';
import { sucessLogin, sucessRegister } from '../utils/toast';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Iprovider) => {

  const navigate = useNavigate();

  const userLogin = async (data: Ilogin) => {
    try {
      const response = await api.post('login', data);
      sucessLogin()
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem(
        '@USER',
        JSON.stringify(response.data.user.id)
      );
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister: SubmitHandler<Iregister> = async (data) => {
    try {
      const response = await api.post('users', data);
      sucessRegister()
      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const logoutDashboard: () => void = () => {
 
    window.localStorage.clear()
    navigate('/') 
  }

  return (
    <UserContext.Provider value={{ userLogin, userRegister, logoutDashboard }}>
      {children}
    </UserContext.Provider>
  );
};



