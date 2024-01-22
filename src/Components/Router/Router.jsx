import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import Jobs from "../../Pages/Jobs/AllJobs";
import About from "../../Pages/About/About";
import Favorite from "../../Pages/Favorite/Favorite";
import Contact from "../../Pages/Contact/Contact";
import Login from "../Login/Login";
import ErrorPage from "../Utilitys/ErrorPage";
import ApplyedJobs from "../../Pages/ApplyedJobs";
import Jobdetails from "../HomeComponets/Jobs/Jobdetails";
import Register from "../Login/Register";
import PrivateRoute from "../../AuthProvider/PrivateRoute";
import AddJobs from "../../Pages/Jobs/AddJobs";

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
        element: (
          <PrivateRoute>
            <Jobs />,
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <Jobdetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-3rve.onrender.com/jobs/`),
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
        loader: () => fetch("https://server-3rve.onrender.com/jobs/"),
      },
      {
        path: "/applyedjobs",
        element: <ApplyedJobs />,
        loader: () => fetch("https://server-3rve.onrender.com/jobs/"),
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
