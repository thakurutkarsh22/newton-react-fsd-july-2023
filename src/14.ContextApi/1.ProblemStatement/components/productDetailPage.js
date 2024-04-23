function ProductDetailPage(props) {
  const { productCount, setProductCount } = props;

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
