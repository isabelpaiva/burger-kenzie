import React from "react";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { UserProvider } from "./providers/UserContext";
import { CartProvider } from "./providers/CartContext";
import CarrinhoProvider from "./providers/Cart";

const App = () => (
  <div>
    <CarrinhoProvider cart={[]} setCart={undefined}>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <Router />
        </CartProvider>
      </UserProvider>
    </CarrinhoProvider>
  </div>
);

export default App;
