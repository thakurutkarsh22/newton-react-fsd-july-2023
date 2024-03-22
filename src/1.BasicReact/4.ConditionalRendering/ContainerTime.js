function ContainerTime(props) {
  const { color } = props;
  return (
    <div
      id="container"
      style={{
        border: "1px solid black",
        background: color,
        width: "100px",
        height: "100px",
      }}
    >
      {/* inside container if we have light or darkness */}
    </div>
  );
}

export default ContainerTime;
