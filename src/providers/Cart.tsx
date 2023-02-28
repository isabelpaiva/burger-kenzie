import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ICartProvider  {
    cart: object[]
    setCart: ReactNode
    children: ReactNode
};

interface ICartState {
    cart: object[];
    setCart: any;
  
}

export const CarrinhoContext = createContext({} as ICartState);

export const CarrinhoProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<ICartState[]>([]);

  return (
    <CarrinhoContext.Provider value={{ cart, setCart }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
