import React from "react";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { UserProvider } from "./providers/UserContext";
import { CartProvider } from "./providers/CartContext";
import { ToastContainer, toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
          <Router />
        </CartProvider>
      </UserProvider>
  
  </div>
);

export default App;
