import { Link } from "react-router-dom";
import { UserProp } from "../types/MyTypes";
import { Layout } from "../components/Layout";
import { Container, CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar"


export default function Home({ user }: UserProp) {
  return (
    <Layout>
      <NavBar/>
      <Container component="main" className="min-h-screen">
        <CssBaseline/>
        <div>
          <div>Welcome! {user?.name.first}</div>
        </div>
      </Container>
    </Layout>
  );
}
