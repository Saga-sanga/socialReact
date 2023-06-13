import { createContext, useContext } from "react";
import { AuthObj } from "../types/MyTypes";

export const AuthContext = createContext<AuthObj>({
  user: null,
  login: null,
  logout: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
