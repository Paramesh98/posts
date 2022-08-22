import { Button, CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import PostItem from "../components/postItem";
import { useGetAllPostsQuery } from "../redux/postsApi";
import { PostProps } from "../types";

const Dashboard = () => {
  const { isLoading, isFetching, data, isError } = useGetAllPostsQuery({});
  const navigate = useNavigate();
  if (isError) return <p>Something went wrong</p>;

  const addPost = () => {
    navigate("/addpost");
  };
  return (
    <>
      {isLoading || isFetching ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container>
            <Grid item md={12} sm={12}>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "100px",
                }}
              >
                <Button
                  variant="contained"
                  style={{ width: "100%", textAlign: "center" }}
                  onClick={addPost}
                >
                  Add Post
                </Button>
              </Box>
            </Grid>
            {data.length > 0 &&
              data.map(({ title, id, body }: PostProps, i: number) => {
                return (
                  <Grid key={i} item md={4} xs={12}>
                    <PostItem title={title} body={body} id={id} />
                  </Grid>
                );
              })}
          </Grid>
        </>
      )}
    </>
  );
};

export default Dashboard;
