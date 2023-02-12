import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const mainApi = createApi({
    reducerPath: "main",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: [
        "Posts",
        "Photos",
        "Users",
    ],
    endpoints(builder) {
      return {
        fetchUsers: builder.query({
          providesTags: ["Users"],
          query: () => {
            return {
              url: "/users",
              method: "GET",
            };
          },
        }),
        fetchPosts: builder.query({
          providesTags: ["Posts"],
          query: () => {
            return {
              url: "/posts",
              method: "GET",
            };
          },
        }),
        fetchPhotos: builder.query<any, any>({
          providesTags: ["Photos"],
          query: () => {
            return {
              url: "/photos",
              method: "GET",
            };
          },
        }),
      };
    },
  });

  export const {useFetchUsersQuery, useFetchPhotosQuery, useFetchPostsQuery} = mainApi;
  export {mainApi};