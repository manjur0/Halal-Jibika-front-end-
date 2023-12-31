import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import Jobs from "../../Pages/Jobs/AllJobs";
import About from "../../Pages/About/About";
import Favorite from "../../Pages/Favorite/Favorite";
import Contact from "../../Pages/Contact/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
]);
