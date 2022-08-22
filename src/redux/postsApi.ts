import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `posts`,
    }),
    getSinglePost: builder.query({
      query: ({ id }) => `posts/${id}`,
    }),
    postSingleData: builder.mutation({
      query: ({ id }: { id: number }) => ({
        method: "POST",
        body: id,
        url: "posts",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  usePostSingleDataMutation,
} = postsApi;
