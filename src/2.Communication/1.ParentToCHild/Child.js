function Child(props) {
  const { infomation } = props;

  return (
    <>
      <div style={{ margin: "30px", background: "yellow" }}>
        Child Body
        {infomation}
      </div>
    </>
  );
}

export default Child;
