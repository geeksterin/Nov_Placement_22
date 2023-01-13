import { Button, Rate, Space, Spin } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart } from "../../store/actions/cart.action";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState();
  const { id } = useParams();

  const cartItems = useSelector((store) => store.cart);

  const isButtonDisabled = () => {
    const foundItem = cartItems.find((item) => item.id === product.id);
    console.log(foundItem)
    return foundItem ? true : false;
  };

  const dispatch = useDispatch();

  const onAddToCartClick = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title.substring(0, 15)}... added to the cart`);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setLoading(false);
      if (response.status === 200) {
        const data = await response.json();
        // console.log(data);
        setProduct(data);
        return;
      }

      setError("something went wrong.");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <h1>error</h1>;
  }

  const { image, title, description, rating, category, price } = product;

  console.log(product);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", padding: 30 }}
    >
      <section style={{ width: "30%" }}>
        <img src={image} alt={title} style={{ maxWidth: "100%" }} />
      </section>
      <section style={{ width: "60%" }}>
        <Space direction="vertical">
          <h3>{title}</h3>
          <Rate defaultValue={rating?.rate} disabled />
          <p>Category - {category}</p>
          <p>{description}</p>

          <h4>Price - ₹ {price} </h4>

          <Button
            type="primary"
            disabled={isButtonDisabled()}
            onClick={onAddToCartClick}
          >
            Add to cart
          </Button>
        </Space>
      </section>
    </div>
  );
};

export default ProductDetail;
