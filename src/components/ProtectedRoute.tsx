import { PropsWithChildren } from "react";
import { useAuth } from "../hooks/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
