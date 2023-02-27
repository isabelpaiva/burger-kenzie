import React, { useContext } from "react";
import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { iProducts } from "../../../providers/@types";

export const ProductCard = ({}) => {


  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src="https://i.imgur.com/Vng6VzV.png" alt="Hamburguer" />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          Hamburguer
        </StyledTitle>
        <StyledParagraph className="category">Sanduíches</StyledParagraph>
        <StyledParagraph className="price">R$ 14,00</StyledParagraph>
        <StyledButton $buttonSize="medium" $buttonStyle="green">
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
