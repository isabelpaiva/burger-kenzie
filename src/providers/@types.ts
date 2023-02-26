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
    passwordConfirmation: string
}

export interface IUserContext {
    userLogin: (data:Ilogin) => void
    userRegister: (data:Iregister) => void | any
    
}