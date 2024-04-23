import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductDetailPage(props) {
  const contextData = useContext(CartContext);
  const { productCount } = contextData;
  return (
    <>
      <div style={{ background: "yellow" }}>
        <h1>ProductDetailPage</h1>
        <p>ProductCoount: {productCount}</p>
      </div>
    </>
  );
}

export default ProductDetailPage;
