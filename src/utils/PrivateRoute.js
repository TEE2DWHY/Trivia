import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
const PrivateRoute = () => {
  const account = sessionStorage.getItem("user");
  const choiceLength = sessionStorage.getItem("choiceLength");
  return (
    <>
      {account ? <Outlet /> : <Home />}
      {!choiceLength ? <Home /> : <Outlet />}
    </>
  );
};

export default PrivateRoute;
