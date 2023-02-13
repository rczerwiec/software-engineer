import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Photos from './views/Photos/Photos';
import Users from './views/Users/Users';
import Posts from './views/Posts/Posts';
import UserProfile from './views/UserProfile/UserProfile';
import Error from "./views/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Users/>,
      errorElement: <Error />,
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
    {
      path: "/userProfile",
      element: <UserProfile/>,
    },
  ]);


function App(){
    return(
        <RouterProvider router={router}/>
    )
}

export default App;