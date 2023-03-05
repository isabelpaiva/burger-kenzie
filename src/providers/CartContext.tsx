import React, { createContext, useContext, useEffect, useState } from "react";
import { Iprovider, ICartContext } from "./@types";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { iProducts } from "./@types";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: Iprovider) => {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [productCarts, setProductCarts] = useState<iProducts[]>([])
  const [dataInput, setDataInput] = useState("");


  const removeAll = () => {
    setProductCarts([])
  }

  const removeBurguer = (product: iProducts) => {
    const data = productCarts.filter((productCart) => productCart.id !== product.id)
    setProductCarts(data)
  }

  const addBurguer = (product: iProducts) =>
  {
    const data = productCarts.find((productCart) => productCart.id === product.id)
    const validate = products.some(e => e.id === data?.id)

    if(!validate)
    {
      setProductCarts([...productCarts, product]);
      console.log('Produto adicionado com sucesso!');
      console.log(productCarts);
    }else
    {
      console.log('Produto já existente no carrinho');
    }
  }

  const searchItem = (event: React.ChangeEvent | any) => {
    setDataInput(event.target.value);
  };

  const itemFilterSearch = products.filter(
    element =>
      element.category.toLowerCase().includes(dataInput.toLowerCase().trim()) ||
      element.name.toLowerCase().includes(dataInput.toLowerCase().trim())
  );

  console.log(itemFilterSearch)

  const navigate = useNavigate();
  const token: any = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const getItem: () => void = async () => {
      try {
        const response = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        window.localStorage.clear();
        navigate("/");
      }
    };
    getItem();
  }, [token]);

  return (
    <CartContext.Provider
      value={{ products, setProducts, dataInput, setDataInput, searchItem, itemFilterSearch, removeAll, addBurguer, productCarts, removeBurguer }}
    >
      {children}
    </CartContext.Provider>
  );
};
