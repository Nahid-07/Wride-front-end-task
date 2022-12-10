import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Profile from "../profile/Profile";
import Signup from "../Signup/Signup";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivetRouter>
            <Home></Home>
          </PrivetRouter>
        ),
      },
      {
        path : '/profile', element:<Profile></Profile>
      }
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);
