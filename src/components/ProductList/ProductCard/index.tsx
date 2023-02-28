import React, { useContext } from "react";
import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { CartContext } from "../../../providers/CartContext";
import CarrinhoProvider, { CarrinhoContext } from "../../../providers/Cart";


export const ProductCard = ({}) => {
  const { products } = useContext(CartContext);
  const {cart, setCart} = useContext(CarrinhoContext)
  console.log(products);

  return (
    <>
      {products.map((item: any) => {
        const { id, name, category, img, price } = item;
        function setCart(arg0: any[]): React.MouseEventHandler<HTMLButtonElement> | undefined {
          throw new Error("Function not implemented.");
        }

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
              <StyledParagraph className="price">R$: {price}</StyledParagraph>
              <StyledButton onClick={() => {setCart([...cart, item])}  }
              $buttonSize="medium" $buttonStyle="green">
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
