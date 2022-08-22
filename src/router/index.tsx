import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "../forms/addPost";
import Dashboard from "../pages/dashboard";
import Post from "../pages/post";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
