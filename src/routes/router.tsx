import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayout";
import Home from "../page/Home/Home";
import PostDetails from "../component/PostDetails";
import ALLPost from "../page/AllPost/AllPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/relief-goods/:id",
        element: <PostDetails />,
      },
      { path: "/relief-goods", element: <ALLPost /> },
    ],
  },
]);
