import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
const PrivateRoute = () => {
  const account = localStorage.getItem("user");
  return <>{account ? <Outlet /> : <Home />}</>;
};

export default PrivateRoute;
