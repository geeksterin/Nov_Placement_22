import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => {

  const token = useSelector(store => store.auth.authorization)
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to={"/auth"} />
      }
    />
  );
};

export default ProtectedRoute;
