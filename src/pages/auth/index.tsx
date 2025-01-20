import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default AuthRequired;
