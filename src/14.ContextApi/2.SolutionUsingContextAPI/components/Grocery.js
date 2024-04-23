import ProductListPage from "./ProductListPage";

function Grocery(props) {
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <h1>Grocery</h1>

        <ProductListPage />
      </div>
    </>
  );
}

export default Grocery;

// It seems here the productCount and setProductCount are not being used inside this component,
// It is just passing it.
