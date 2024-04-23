import Cart from "./Cart";

function ReusableComponent(props) {
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <h1>ReusableComponent</h1>
        <Cart />
      </div>
    </>
  );
}

export default ReusableComponent;

// It seems here the productCount and setProductCount are not being used inside this component,
// It is just passing it.
