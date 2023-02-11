import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import Photos from './views/Photos';
import Users from './views/Users';
import Posts from './views/Posts';
import { store } from './shared/store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
  },
  {
    path: "/photos",
    element: <Photos/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path: "/posts",
    element: <Posts/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
