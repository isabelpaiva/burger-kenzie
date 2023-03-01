import React from "react";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { UserProvider } from "./providers/UserContext";
import { CartProvider } from "./providers/CartContext";


const App = () => (
  <div>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <Router />
        </CartProvider>
      </UserProvider>
  
  </div>
);

export default App;
