import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Tooltip,
  CardMedia,
  Box,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { CommentBox } from "./CommentBox";
import { useState, ChangeEvent, useEffect, MouseEvent } from "react";

export function CreatePost() {
  const [imageFile, setImageFile] = useState<File>();

  useEffect(() => {
    console.log(imageFile);
  }, [imageFile]);

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageFile(event.target.files[0]);
    }
    // Prevent file input bug i.e. unable to re-select same file
    event.target.value = "";
  };

  const handleClearImage = (event: MouseEvent) => {
    event.preventDefault();
    setImageFile(undefined);
  }

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
          <Tooltip title="Add Image" placement="top">
            <IconButton component="label" aria-label="insert image">
              <AddPhotoAlternateIcon />
              <input
                onChange={handleFileInput}
                type="file"
                accept="image/*"
                hidden
              />
            </IconButton>
          </Tooltip>
        }
        title={
          <Typography sx={{ textAlign: "center", ml: "-32px" }} variant="h6">
            Create Post
          </Typography>
        }
      />
      {imageFile ? (
        <Box
          sx={{
            p: 2,
            mx: 4,
            mb: 1,
            border: "1px solid grey",
            borderRadius: "5px",
            position: "relative",
          }}
          component="div"
        >
          <IconButton
            sx={{
              position: "absolute",
              right: "8px",
              top: "8px",
              backgroundColor: "#e0e0e0",
              ":hover": {
                color: "white",
                backgroundColor: "#424242"
              }
            }}
            onClick={handleClearImage}
            aria-label="clear image"
          >
            <CloseIcon />
          </IconButton>
          <CardMedia component="img" height="126" image={URL.createObjectURL(imageFile)} />
        </Box>
      ) : (
        ""
      )}
      <CommentBox label="What's on your mind?" />
    </Card>
  );
}
