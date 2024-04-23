import Task2 from "../components/Task2";
import { Suspense } from "react";
import logo from "../assets/logo192.png";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Task1 from "../components/Task1";
import { Navbar } from "../components/Navbar";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Suspense
        fallback={
          <div className="dark:bg-[#000] bg-[#fff]">
            <img
              src={logo}
              className="m-auto flex h-screen w-52 items-center object-contain"
              alt="image not found"
            />
          </div>
        }
      >
        <div>
          <Navbar />
          <Task1 />
        </div>
      </Suspense>
    ),
  },
  {
    path: "/task2",
    element: (
      <div>
        <Navbar />
        <Task2 />
      </div>
    ),
  },
],{
  basename: "/",
  // future: {
  //   v7_normalizeFormMethod: true,
  // },
});

export default routers;
