import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Photos from './views/Photos';
import Users from './views/Users';
import Posts from './views/Posts';

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
    <RouterProvider router={router}/>
  </React.StrictMode>
);
