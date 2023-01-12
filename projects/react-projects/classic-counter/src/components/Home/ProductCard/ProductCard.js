import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart } from "../../../store/actions/cart.action";

const { Meta } = Card;

const ProductCard = (props) => {
  const { title, description, price, image, id } = props;

  const cartItems = useSelector(store => store.cart)

  const  isButtonDisabled = () => {
    const foundItem = cartItems.find(item => item.id === id)
    return foundItem ? true : false
  }

  const dispatch = useDispatch();

  const onAddToCartClick = () => {
    dispatch(addItemToCart({...props, quantity: 1}))
    toast.success(`${props.title.substring(0,15)}... added to the cart`)
  };

  return (
    <Card
      hoverable
      style={{ width: "30%", margin: "1.5%"}}
      cover={<img alt="example" src={image}  style={{ width: "60%", objectFit: "contain" }}/>}
    >
      <Meta title={title} description={description} />
      <p>Price - INR {price}</p>

      <Button type="primary" disabled={isButtonDisabled()} onClick={onAddToCartClick}>Add to cart</Button>
    </Card>
  );
};

export default ProductCard;
