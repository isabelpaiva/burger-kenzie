import React, { useContext } from "react";
import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { CartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { productCarts, removeAll } = useContext(CartContext);

  return (
    <StyledCartProductList>
      {productCarts.length > 0 ? (
       <><>
          <ul>
            <CartProductCard />
          </ul>

        </><>
            <StyledButton
              onClick={removeAll}
              $buttonSize="default"
              $buttonStyle="gray"
            >
              Remover todos
            </StyledButton>

          </></>
      ) : (
        <div className="emptyBox">
          <StyledTitle tag="h3" $fontSize="three" textAlign="center">
            Sua sacola está vazia
          </StyledTitle>
          <StyledParagraph textAlign="center">Adicione itens</StyledParagraph>
        </div>
      )}

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          {productCarts
            .reduce((t: number, i: any) => {
              return i.price * 1 + t;
            }, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </StyledParagraph>
      </div>
    </StyledCartProductList>
  );
};

export default CartProductList;
