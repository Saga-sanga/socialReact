import { Link } from "react-router-dom";
import { UserProp } from "../types/types";
import { Layout } from "../components/Layout";

export default function Home({ user }: UserProp) {
  return (
    <Layout>
      <div>
        <div>Welcome! {user?.name.first}</div>
        <Link to="/login">Login</Link>
      </div>
    </Layout>
  );
}
