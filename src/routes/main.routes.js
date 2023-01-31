import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element:<HomePage/>
        },
      ]
    },
  ]);

export default router;