function StudentItem(props) {
  const { classs, name, color = "lightblue" } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: color,
        padding: "20px",
        margin: "20px",
      }}
      id={name}
    >
      <div>{name}</div>
      <div>{classs}</div>
    </div>
  );
}

export default StudentItem;
