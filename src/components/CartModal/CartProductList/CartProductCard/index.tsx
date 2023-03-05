import React, { useContext } from "react";
import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from "../../../../providers/CartContext";

const CartProductCard = () => {
  const { removeBurguer, productCarts } = useContext(CartContext)
  return (
    <>
      {
         productCarts.map((item: any) => {
          const { id, name, img } = item;

          return (
              <StyledCartProductCard id={id}>
                  <div className='imageBox'>
                    <img src={img} alt='Hamburguer' />
                  </div>
                  <div className='contentBox'>
                    <StyledTitle tag='h3' $fontSize='three'>
                      {name}
                    </StyledTitle>
                    <button type='button' aria-label='Remover'>
                      <MdDelete id={id} size={24} onClick={() => removeBurguer(item)}/>
                    </button>
                  </div>
                </StyledCartProductCard>
          )
         }
         )}
       
    </>
  
  )
};

export default CartProductCard;
