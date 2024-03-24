function Child2OperationDIsplay(props) {
  const { info } = props;
  return (
    <div style={{ padding: "10px", margin: "10px", border: "1px solid black" }}>
      <h1>Operation Details</h1>

      <div>{info ? info : "NO Operation YET"}</div>
    </div>
  );
}

export default Child2OperationDIsplay;
