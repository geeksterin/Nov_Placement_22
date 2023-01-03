import { BrowserRouter, Route } from "react-router-dom";
import Auth from "../Auth/Auth";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path={"/"} component={Home} exact={true} />
      <Route path={"/cart"} component={Cart} />
      <Route path={"/auth"} component={Auth} />
      <Route path={"/profile"} component={Profile} />
    </BrowserRouter>
  );
};

export default Router;


