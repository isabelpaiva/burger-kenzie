import React, { useContext } from "react";
import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { CartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { productCarts, removeAll } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>

          <CartProductCard />
     
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">{
            productCarts.reduce((t: number, i: any) => {
              return i.price * 1 + t;
            }, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</StyledParagraph>
      </div>
      <StyledButton onClick={removeAll} $buttonSize="default" $buttonStyle="gray">
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
