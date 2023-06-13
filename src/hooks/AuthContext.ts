import { createContext, useContext } from "react";
import { AuthObj } from "../types/types";

export const AuthContext = createContext<AuthObj>({
  user: null,
  login: null,
  logout: null
});

export const useAuth = () => {
  return useContext(AuthContext);
}