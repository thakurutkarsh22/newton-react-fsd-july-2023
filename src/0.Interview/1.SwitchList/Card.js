function Card(props) {
  console.log(props);
  const { id, title, list, handleClick } = props;
  return (
    <>
      <div
        style={{ padding: "10px", margin: "10px", border: "1px solid black" }}
        onClick={() => {
          handleClick(id, list, title);
        }}
      >
        {title}
      </div>
    </>
  );
}

export default Card;
