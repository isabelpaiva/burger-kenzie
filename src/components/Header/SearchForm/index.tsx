import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import React, { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const SearchForm = () => {

  const { searchItem } =  useContext(CartContext)
   
  return (
    <StyledSearchForm>
      <input type="text" onChange={searchItem} placeholder="Digitar pesquisa" />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
