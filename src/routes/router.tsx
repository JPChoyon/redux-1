import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Task from "@/pages/Task";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
    ],
  },
]);
export default router;
