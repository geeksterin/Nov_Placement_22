import { Card, Rate, Space } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

const ProductCard = (props) => {
  const { title, price, image, id, history, rating, category } =
    props;

  return (
    <Card
      hoverable
      style={{ width: "23%", margin: "0.7%", padding: 10 }}
      cover={
        <img
          alt="example"
          src={image}
          style={{ width: "50%", margin: "0 auto" }}
        />
      }
      onClick={() => history.push(`/product/${id}`)}
    >
      <Space direction="vertical">
        <Meta title={<p style={{ whiteSpace: "normal"}}>{title}</p>} description={`Price - INR ${price}`} />
        <Rate allowHalf defaultValue={rating?.rate} disabled />
        <span>Category - {category}</span>
      </Space>
    </Card>
  );
};

export default withRouter(ProductCard);
