import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { PostData } from "../types/MyTypes";
import { CommentBox } from "./CommentBox";

export function PostCard({post}: PostData) {
  return (
    <Card className="max-w-2xl w-full my-4">
      <CardHeader
        avatar={
          <Avatar
            alt={post.author.name.first}
            aria-label="Rajmi Ulda"
            src={post.author.profileImg}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${post.author.name.first} ${post.author.name.last}`}
        subheader={new Date().toDateString()}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1">{post.content}</Typography>
      </CardContent>
      {post.image ? (
        <CardMedia
          component="img"
          height="194"
          image={post.image}
          alt="Some Image"
        />
      ) : (
        ""
      )}
      <CardActions disableSpacing sx={{px: 2}}>
        <Button startIcon={<ThumbUpOutlinedIcon />}>Like</Button>
        <IconButton sx={{ ml: "auto" }}>
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CommentBox label="Comment"/>
      {/* TODO: Add comment list */}
    </Card>
  );
}
