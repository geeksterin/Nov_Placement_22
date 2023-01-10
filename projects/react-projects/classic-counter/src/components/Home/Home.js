import { useEffect, useState } from "react";
import { Button, Card, Spin } from "antd";
import ProductCard from "./ProductCard/ProductCard";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setLoading(false);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setProducts(data);
        return;
      } 

      setError("something went wrong.")
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, []);

  if (loading) {
    return <Spin size="large" />
  }

  if (error) {
    return <h1>error</h1>;
  }

  const renderProducts = () => {
    return products.map(product => <ProductCard key={product.id} {...product} />)
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
     {renderProducts()}
    </div>
  );
};

export default Home;
