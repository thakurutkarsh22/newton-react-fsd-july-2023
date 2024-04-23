function ProductListPage(props) {
  const { productCount, setProductCount } = props;

  return (
    <>
      <div style={{ background: "yellow" }}>
        <h1>ProductListPage</h1>
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

export default ProductListPage;
