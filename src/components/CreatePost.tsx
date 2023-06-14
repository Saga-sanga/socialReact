import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CommentBox } from "./CommentBox";

export function CreatePost() {
  return (
    <Card className="max-w-2xl w-full">
      <CardHeader
        avatar={
          <Avatar
            alt="Rajmi Ulda"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography sx={{ textAlign: "center", ml: "-32px" }} variant="h6">
            Create Post
          </Typography>
        }
        // subheader="Create a new Post"
      />
      <CommentBox label="What's on your mind?" />
    </Card>
  );
}
