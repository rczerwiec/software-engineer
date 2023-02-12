import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {mainApi} from "./api/main";
import userProfileReducer from "./slices/userProfileSlice";


export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        userProfile: userProfileReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            mainApi.middleware,
        );
      },
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {useFetchUsersQuery,useEditUserMutation,useCreateUserMutation, useFetchAlbumsQuery, useFetchPostsQuery,useFetchAlbumPhotosQuery, useDeleteUserMutation} from "./api/main";