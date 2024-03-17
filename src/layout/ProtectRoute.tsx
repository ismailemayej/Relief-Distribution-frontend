/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { userDetails } from "../Redux/AuthSlice";
import { useAppSelector } from "../Redux/Hooks";
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user: any = useAppSelector(userDetails);
  console.log(user, "protected route");

  if (user?.email === null) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
