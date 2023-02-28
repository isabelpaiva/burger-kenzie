import {ReactNode } from "react";


export interface Iprovider {
    children: ReactNode;
}


export interface Ilogin {
    email: string;
    password: string;
}

export interface Iregister {
    name: string
    email: string
    password: string
    passwordConfirmed: string
}

export interface IUserContext {
    userLogin: (data:Ilogin) => void
    userRegister: (data:Iregister) => void | any
    logoutDashboard: () => void;
    
}

export interface ICartContext {
   products: iProducts[]
   setProducts: (products: iProducts[]) => void;
   
}

export interface iProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    
}

export interface iProductsProps {
    product: iProducts;
  }


  export interface CartModalProps  {
  onClose: () => any
  }
  


