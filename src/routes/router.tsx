import { createBrowserRouter } from "react-router-dom";

import Home from "../page/Home/Home";
import PostDetails from "../component/PostDetails";
import ALLPost from "../page/AllPost/AllPost";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import AllSupplyPost from "../page/Dashboard/AllSupplyPost";
import UserDashboard from "../page/Dashboard/UserDashboard";
import CreateSupply from "../component/CreateSupply";
import ProtectedRoute from "../layout/ProtectRoute";
import PieCharts from "../page/Dashboard/PieChat";
import MainApp from "@/MainApp";
import Leaderboard from "@/page/Dashboard/Leaderboards/Leaderboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/relief-goods/:id",
        element: <PostDetails />,
      },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/relief-goods", element: <ALLPost /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/piechart",
        element: (
          <ProtectedRoute>
            <PieCharts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/allsupplypost",
        element: <AllSupplyPost />,
      },
      {
        path: "/dashboard/create-supply",
        element: (
          <ProtectedRoute>
            <CreateSupply />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
