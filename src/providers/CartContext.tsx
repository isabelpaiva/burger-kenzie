import React, { createContext, useEffect, useState } from 'react';
import { Iprovider, ICartContext } from './@types';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { iProducts } from './@types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: Iprovider) => {
    const [products, setProducts] = useState<iProducts[]>([]);
   const navigate = useNavigate()
   const token: any = localStorage.getItem('@TOKEN')

  useEffect(() => {
    const getItem: () => void = async () => {
        try {
            const response = await api.get("products", { 
                headers: {
                Authorization: `Bearer ${token}`,
              }});
              console.log(response.data)
              setProducts(response.data)
        } catch (err) {
            window.localStorage.clear()
            navigate('/')
        }
    }
    getItem()
  }, [token])

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
