import { useState } from "react";
import Grocery from "./Grocery";
import ReusableComponent from "./ReusableComponent";
import ProductDetailPage from "./productDetailPage";
import CartContext from "../context/CartContext";

function ReactAppContextSolutionApi() {
  const [productCount, setProductCount] = useState(100);

  return (
    <>
      <h1>ReactAppContextSolutionApi</h1>

      <CartContext.Provider
        value={{ productCount: productCount, setProductCount: setProductCount }}
      >
        <Grocery />
        <ProductDetailPage />
        <ReusableComponent />
      </CartContext.Provider>
    </>
  );
}

export default ReactAppContextSolutionApi;
