import { lazy, Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Auth from "../Auth/Auth";
// import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import AppLayout from "../Layout/Layout";
// import ProductDetail from "../ProductDetails/ProductDetails";
// import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


const CartLazy = lazy(() => import("../Cart/Cart"));
const ProductDetailLazy = lazy(() => import("../ProductDetails/ProductDetails"));
const AuthLazy = lazy(() => import("../Auth/Auth"));
const ProfileLazy = lazy(() => import("../Profile/Profile"));

const Profile = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileLazy />
    </Suspense>
  );
};


const Auth = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthLazy />
    </Suspense>
  );
};


const Cart = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartLazy />
    </Suspense>
  );
};

const ProductDetail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailLazy />
    </Suspense>
  );
};



const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Route path={"/"} component={Home} exact={true} />
        <Route path={"/cart"} component={Cart} />
        <Route path={"/auth"} component={Auth} />
        <Route path={"/product/:id"} component={ProductDetail} />
        <ProtectedRoute path={"/profile"} component={Profile} />
      </AppLayout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Router;
