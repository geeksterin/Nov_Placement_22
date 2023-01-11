import { Button, Card, Space } from "antd";
import { useDispatch } from "react-redux";
import { decreaseQuantityByOne, increaseQuantityByOne, removeItemFromCart } from "../../../store/actions/cart.action";

const { Meta } = Card;

const CartCard = (props) => {
  const { title, description, price, image, id, quantity } = props;
  const dispatch = useDispatch();

  const onRemoveItemFromCart = () => dispatch(removeItemFromCart(id));

  return (
    <Card
      hoverable
      style={{ width: "30%", margin: "1.5%"}}
      cover={<img alt="example" src={image}  style={{ width: "60%", objectFit: "contain" }}/>}
    >
      <Meta title={title} description={description} />
      <p>Price - INR {price}</p>

      <Button type="primary" danger={true}  onClick={onRemoveItemFromCart} style={{marginRight: 20}}>Remove Item</Button>
      <Space align="end">
        <Button type="primary" onClick={() => dispatch(increaseQuantityByOne(id))}>+</Button>
        <p>{quantity}</p>
        <Button type="primary" onClick={() => dispatch(decreaseQuantityByOne(id))}>-</Button>

      </Space>
    </Card>
  );
};

export default CartCard;
