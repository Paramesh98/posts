import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PostProps } from "../types";

const PostItem = ({ title, body, id }: PostProps) => {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      <Card sx={{ margin: "20px" }}>
        <CardActionArea onClick={goToPost}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ID : {id}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PostItem;
