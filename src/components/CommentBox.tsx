import {
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { KeyboardEvent } from "react";
import SendIcon from '@mui/icons-material/Send';

export function CommentBox({label}: { label: string}) {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.shiftKey) {
      console.log("You pressed Shift + Enter");
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      console.log(event.key, "pressed");
    }
  }

  return (
    <Box className="flex items-center gap-2 px-4 py-2">
        <TextField
          onKeyDown={handleKeyPress}
          fullWidth
          id="outlined-multiline-flexible"
          label={label}
          multiline
          maxRows={6}
        />
        <IconButton>
          <SendIcon color="secondary"/>
        </IconButton>
      </Box>
  );
}