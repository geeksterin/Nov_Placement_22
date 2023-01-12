import { Button, Alert } from "antd";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../store/actions/cart.action";
import CustomModal from "../CustomModal/CustomModal";
import CartCard from "./CartCard/CartCard";

const Cart = () => {
  const [id, setId] = useState(0)

  const cartItems = useSelector((store) => store.cart);
  const token = useSelector(store => store.auth.authorization)

  const dispatch = useDispatch()


  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  if (cartItems.length < 1) {
    return <h2>No items in the cart</h2>;
  }

  const renderProducts = () => {
    return cartItems.map((product) => (
      <CartCard key={product.id} {...product} setId={setId}/>
    ));
  };

  const onCancel = () => setId(0);
  const onConfirm = () => {
    dispatch(removeItemFromCart(id));
    setId(0)
  };

  return (
    <div>

      {!token && <Alert type="error" message="Please log in to save your items in cart!" />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderProducts()}</div>
      <div style={{ position: "sticky", bottom: "0", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center",  padding: 20 }}>
        <h2>No of items: {cartItems.length}</h2>
        <h2>Total: {total.toFixed(2)} INR</h2>

        <Button type="primary" size="large">Checkout</Button>
      </div>

      <CustomModal
        isModalVisible={id}
        setModalVisibility={setId}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title={"Remove item from cart"}
      >
        <h3>Are you sure you want to remove this product from the cart?</h3>
        </CustomModal>
    </div>
  );
};


export default Cart;