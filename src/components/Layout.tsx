import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

// TODO: Create layout
export function Layout({ children }: PropsWithChildren) {
  return (
    <section className="bg-gray-100">
      <NavBar />
      {children}
    </section>
  );
}
