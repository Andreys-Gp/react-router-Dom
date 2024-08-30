import { useState } from "react";
import { UserContext } from "./UserContext";


export const UsuarioProvider = ({ children }) => {

  const [usuario, setusuario] = useState({})

  return (
    <UserContext.Provider value={{ usuario , setusuario}}>
      {children}
    </UserContext.Provider>
  );
};
