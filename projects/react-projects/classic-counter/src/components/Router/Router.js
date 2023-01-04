import { BrowserRouter, Route } from "react-router-dom";
import Auth from "../Auth/Auth";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import AppLayout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Route path={"/"} component={Home} exact={true} />
        <ProtectedRoute path={"/cart"} component={Cart} />
        <Route path={"/auth"} component={Auth} />
        <ProtectedRoute path={"/profile"} component={Profile} />
      </AppLayout>
    </BrowserRouter>
  );
};

export default Router;
