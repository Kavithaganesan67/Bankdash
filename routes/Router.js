import React from "react";

import FullLayout from "../layouts/FullLayout";

import Login from "../views/ui/Login";

import Dashboard from "../components/dashboard/Dashboard.jsx";
import Register from "../views/ui/register.jsx";

const ThemeRoutes = [
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  { path: "/", exact: true, element: <Login /> },
  { path: "/register", exact: true, element: <Register /> },
];

export default ThemeRoutes;
