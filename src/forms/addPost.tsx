import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Snackbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { usePostSingleDataMutation } from "../redux/postsApi";

export default function AddPost() {
  const { handleSubmit, control, reset } = useForm();
  const [submitPost] = usePostSingleDataMutation();
  const [open, setOpen] = React.useState(false);
  const onsubmit = (data: any) => {
    submitPost(data).unwrap();
    reset({
      title: "",
      body: "",
    });
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ margin: "100px" }}>
      <Grid container>
        <Grid item sm={12} md={12}>
          <Controller
            name={"title"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                placeholder="Enter Title"
                onChange={onChange}
                value={value}
                label={"Title"}
                // fullWidth
                sx={{ marginBottom: "20px", width: "100%" }}
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <Controller
            name={"body"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                placeholder="Enter Body"
                onChange={onChange}
                value={value}
                label={"Body"}
                fullWidth
                sx={{ marginBottom: "20px", width: "100%" }}
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <Button
            sx={{ width: "100%" }}
            onClick={handleSubmit(onsubmit)}
            variant="outlined"
          >
            Add Post
          </Button>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Successfully submitted"
        />
      </Grid>
    </Box>
  );
}
