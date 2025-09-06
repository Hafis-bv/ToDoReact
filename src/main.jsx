import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoList from "./pages/ToDoList.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/list",
    element: <ToDoList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
