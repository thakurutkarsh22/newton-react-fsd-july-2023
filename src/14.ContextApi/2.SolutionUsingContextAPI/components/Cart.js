import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart(props) {
  const contextData = useContext(CartContext);

  const { productCount, setProductCount = () => {} } = contextData;

  return (
    <>
      <div style={{ background: "yellow" }}>
        <h1>Cart</h1>
        <button
          onClick={() => {
            setProductCount((old) => old + 1);
          }}
        >
          +
        </button>
        <p>ProductCoount: {productCount}</p>
        <button
          onClick={() => {
            setProductCount((old) => old - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Cart;
