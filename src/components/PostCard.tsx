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
  TextField,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from "@mui/icons-material/Share";

export function PostCard() {
  const image =
    "https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";
  return (
    <Card className="max-w-xl">
      <CardHeader
        avatar={
          <Avatar
            alt="Rajmi Ulda"
            aria-label="Rajmi Ulda"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Random Dude"
        subheader={new Date().toDateString()}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1">I feel so sad</Typography>
      </CardContent>
      {image ? (
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Some Image"
        />
      ) : (
        ""
      )}
      <CardActions disableSpacing className="gap-4">
        <Button startIcon={<ThumbUpOutlinedIcon />}>Like</Button>
        {/* <Button startIcon={<ThumbDownOutlinedIcon />}>Unlike</Button> */}
        <IconButton sx={{ ml: "auto" }}>
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Box className="flex items-center gap-2 px-4 py-2">
        <TextField
          fullWidth
          // sx={{
          //   width: "100%",
          //   py: 1,
          //   px: 2,
          //   "& label": { py: 1.5, px: 2.75 },
          // }}
          id="outlined-multiline-flexible"
          label="Comment"
          multiline
          minRows={2}
          maxRows={6}
        />
        <IconButton>
          <SendIcon color="secondary"/>
        </IconButton>
      </Box>
    </Card>
  );
}
