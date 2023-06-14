import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

// TODO: Create layout
export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
