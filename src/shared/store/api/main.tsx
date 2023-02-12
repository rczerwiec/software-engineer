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
        deleteUser: builder.mutation({
          invalidatesTags: ["Users"],
          query: (user) => {
            return {
              url: `/users/${user.id}`,
              method: "DELETE",
            };
          },
        }),
        fetchPosts: builder.query({
          providesTags: ["Posts"],
          query: (id) => {
            return {
              url: `/users/${id}/posts`,
              method: "GET",
            };
          },
        }),
        fetchPhotos: builder.query<any, any>({
          providesTags: ["Photos"],
          query: (id) => {
            return {
              url: `/users/${id}/photos`,
              method: "GET",
            };
          },
        }),
      };
    },
  });

  export const {useFetchUsersQuery, useFetchPhotosQuery, useFetchPostsQuery ,useDeleteUserMutation} = mainApi;
  export {mainApi};