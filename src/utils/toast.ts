import { toast } from "react-toastify";

export const sucessRegister = () => {
  toast.success("Cadastro efetuado com sucesso!", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const sucessLogin = () => {
  toast.success("Login realizado com sucesso!", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


export const AddItemToast = () => {
  toast.success("Item adicionado com sucesso!", {
    position: "top-right",
    autoClose: 250,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


export const ErrorItemToast = () => {
  toast.error("O item já está no carrinho!", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
