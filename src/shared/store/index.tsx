import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {mainApi} from "./api/main";

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            mainApi.middleware,
        );
      },
})

setupListeners(store.dispatch);

export {useFetchUsersQuery, useFetchPhotosQuery, useFetchPostsQuery} from "./api/main";