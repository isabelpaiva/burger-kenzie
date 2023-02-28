import React, { useContext, useState } from "react";
import { MdShoppingCart, MdLogout } from "react-icons/md";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";

import { StyledContainer } from "../../styles/grid";
import { UserContext } from "../../providers/UserContext";
import CartModal from "../CartModal";


const Header = () => {
  const { logoutDashboard } = useContext(UserContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // novo estado

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true); // abre o modal
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false); // fecha o modal
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
         <nav className='nav' role='navigation'>
          <SearchForm />
            <div className="buttons">
              <button type="button" onClick={handleOpenCartModal}> {/* adiciona a função de abrir o modal */}
                <MdShoppingCart size={28} />
              </button>
              <button onClick={logoutDashboard} type="button">
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
      {/* renderiza o modal somente quando o estado isCartModalOpen for true */}
      {isCartModalOpen && <CartModal onClose={handleCloseCartModal} />}
    </StyledHeader>
  );
};

export default Header;
