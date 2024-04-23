import { useState } from "react";
import Grocery from "./Grocery";
import ReusableComponent from "./ReusableComponent";
import ProductDetailPage from "./productDetailPage";

function ReactAppContextProblemApi() {
  const [productCount, setProductCount] = useState(100);

  return (
    <>
      <h1>ReactAppContextProblemApi</h1>

      <Grocery productCount={productCount} setProductCount={setProductCount} />
      <ProductDetailPage
        productCount={productCount}
        setProductCount={setProductCount}
      />
      <ReusableComponent
        productCount={productCount}
        setProductCount={setProductCount}
      />
    </>
  );
}

export default ReactAppContextProblemApi;
