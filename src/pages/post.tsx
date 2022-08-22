import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSinglePostQuery } from "../redux/postsApi";
import { PostProps } from "../types";

const PostItem = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetSinglePostQuery({ id: id });

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        Something went wrong
      </Box>
    );

  return (
    <Box sx={{ margin: "100px" }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ID : {data?.id}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostItem;
