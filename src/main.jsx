import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Form, RouterProvider, createBrowserRouter } from "react-router-dom";
// import LandingPage from './components/LandingPage.jsx'
import Buyers_list from "./components/Buyers_list.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/potential-buyers",
    element: <Buyers_list />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
