import { PropsWithChildren, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "../hooks/AuthContext"
import { useNavigate } from "react-router-dom";

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
