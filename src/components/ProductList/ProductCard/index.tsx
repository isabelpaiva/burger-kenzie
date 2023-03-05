import React, { useContext } from "react";
import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { CartContext } from "../../../providers/CartContext";

export const ProductCard = ({}) => {
  const { products, itemFilterSearch, addBurguer } = useContext(CartContext);
  console.log(products);

  return (
    <>
      {itemFilterSearch.map((item: any) => {
        const { id, name, category, img, price } = item;

        return (
          <StyledProductCard key={id}>
            <div className="imageBox">
              <img src={img} alt={name} />
            </div>
            <div className="content">
              <StyledTitle tag="h3" $fontSize="three">
                {name}
              </StyledTitle>
              <StyledParagraph className="category">{category}</StyledParagraph>
              <StyledParagraph className="price">{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</StyledParagraph>
              <StyledButton onClick={() => addBurguer(item)} $buttonSize="medium" $buttonStyle="green">
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>
        );
      })}
    </>
  );
};

export default ProductCard;
