import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function PostCard() {
  return (
    <Card className="max-w-xl">
      <CardHeader
        avatar={
          <Avatar alt="Rajmi Ulda" aria-label="Rajmi Ulda" src="https://mui.com/static/images/avatar/2.jpg"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Random Dude"
        subheader={new Date().toDateString()}
      />
      <CardContent>
        <Typography variant="h5">Some text content</Typography>
      </CardContent>
    </Card>
  );
}
