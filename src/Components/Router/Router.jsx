import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import Jobs from "../../Pages/Jobs/AllJobs";
import About from "../../Pages/About/About";
import Favorite from "../../Pages/Favorite/Favorite";
import Contact from "../../Pages/Contact/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";
import AddJobs from "../../Pages/AddJobs/AddJobs";
import ErrorPage from "../Utilitys/ErrorPage";
import ApplyedJobs from "../../Pages/ApplyedJobs";
import Jobdetails from "../HomeComponets/Jobs/Jobdetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/jobDetails/:id",
        element: <Jobdetails />,
        loader: () => fetch("/Jobs.json"),
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
        path: "/applyedjobs",
        element: <ApplyedJobs />,
        loader: () => fetch("/Jobs.json"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addjobs",
        element: <AddJobs />,
      },
    ],
  },
]);
