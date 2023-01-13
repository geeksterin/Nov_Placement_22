import { Button, Alert } from "antd";
import { useState } from "react";
import useRazorpay from "react-razorpay";


import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import shortUUID from "short-uuid";
import { removeItemFromCart } from "../../store/actions/cart.action";
import CustomModal from "../CustomModal/CustomModal";
import CartCard from "./CartCard/CartCard";



const Cart = ({history}) => {
  console.log(history)
  
  const Razorpay = useRazorpay()
  
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


  const onCheckout =async () => {
    if(!token) {
      toast.error("Please login to checkout.")
      history.push("/auth")
      return;
    }

    let PAYMENT_OPTIONS = {
      "key": "rzp_test_hbYCXI2cI0zN0B", // Enter the Key ID generated from the Dashboard
      "amount": total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Geekster Ecommerce",
      "description": "Test Transaction",
      "image": "https://geekster.in/images/logo.svg",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
     
      "theme": {
          "color": "#3399cc"
      }
    };

    try {
      const response = await fetch("http://localhost:4500/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: total*100, receipt: shortUUID.generate()})
      })

      if(response.status === 200) {
        const data = await response.json()
       PAYMENT_OPTIONS ={...PAYMENT_OPTIONS, order_id: data.data.id}
      }

      // toast.error("Failed to generate order id")

    } catch(e) {
      console.log(e)
    }

   


    var rzp1 = new Razorpay(PAYMENT_OPTIONS);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });


    rzp1.open()
  }

  return (
    <div>

      {!token && <Alert type="error" message="Please log in to save your items in cart!" />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderProducts()}</div>
      <div style={{ position: "sticky", bottom: "0", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center",  padding: 20 }}>
        <h2>No of items: {cartItems.length}</h2>
        <h2>Total: {total.toFixed(2)} INR</h2>

        <Button type="primary" size="large" onClick={onCheckout}>Checkout</Button>
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