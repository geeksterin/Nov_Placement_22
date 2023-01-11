import { useSelector } from "react-redux";
import CartCard from "./CartCard/CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  if (cartItems.length < 1) {
    return <h2>No items in the cart</h2>;
  }

  const renderProducts = () => {
    return cartItems.map((product) => (
      <CartCard key={product.id} {...product} />
    ));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{renderProducts()}</div>
  );
};


export default Cart;