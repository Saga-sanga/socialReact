import { UserProp } from "../types/MyTypes";
import { Layout } from "../components/Layout";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PostCard } from "../components/PostCard";
import { posts } from "../assets/posts";
import { CreatePost } from "../components/CreatePost";

export default function Home({ user }: UserProp) {
  return (
    <Layout>
      <Container component="main" className="min-h-[calc(100vh_-_64px)]">
        <Grid container direction="column" alignItems="center" className="pt-8">
          <CreatePost/>
          {
            posts.map((post) => <PostCard key={post._id} post={post}/>)
          }
        </Grid>
      </Container>
    </Layout>
  );
}
