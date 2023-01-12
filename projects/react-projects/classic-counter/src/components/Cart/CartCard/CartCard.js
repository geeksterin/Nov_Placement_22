import { Button, Card, Space } from "antd";
import { useDispatch } from "react-redux";
import {
  decreaseQuantityByOne,
  increaseQuantityByOne,
} from "../../../store/actions/cart.action";

const { Meta } = Card;

const CartCard = (props) => {
  const { title, price, image, id, quantity, setId } = props;
  const dispatch = useDispatch();

  const onRemoveItemFromCart = () => setId(id);

  return (
    <Card
      hoverable
      style={{
        width: "30%",
        margin: "1.5%",
        display: "flex",
        padding: 10,
        alignItems: "center",
        overflow: "hidden",
        whiteSpace: "normal",
      }}
      cover={
        <img
          alt="example"
          src={image}
          style={{ width: 100, objectFit: "contain" }}
        />
      }
    >
      <Meta
        title={title.substring(0, 25) + "..."}
        description={`Price - INR ${price}`}
        style={{ whiteSpace: "normal" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Button
          type="primary"
          danger={true}
          onClick={onRemoveItemFromCart}
          style={{ marginRight: 20 }}
        >
          Remove Item
        </Button>
        <Space align="end" style={{ display: "flex", alignItems: "center" }}>
          <Button
            type="primary"
            onClick={() => dispatch(increaseQuantityByOne(id))}
          >
            +
          </Button>
          <span>{quantity}</span>
          <Button
            type="primary"
            onClick={() => dispatch(decreaseQuantityByOne(id))}
          >
            -
          </Button>
        </Space>
      </div>
    </Card>
  );
};

export default CartCard;
