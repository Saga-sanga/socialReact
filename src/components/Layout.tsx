import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const defaultTheme = createTheme();

export function Layout({children}: PropsWithChildren) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}