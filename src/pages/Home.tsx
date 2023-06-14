import { UserProp } from "../types/MyTypes";
import { Layout } from "../components/Layout";
import { Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { PostCard } from "../components/PostCard";

export default function Home({ user }: UserProp) {
  return (
    <Layout>
      <Container component="main" className="min-h-[calc(100vh_-_64px)]">
        <Grid container direction="column" className="pt-8">
          <PostCard/>
        </Grid>
      </Container>
    </Layout>
  );
}
