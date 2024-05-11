function Card(props) {
  console.log(props);
  const { id, title, list, handleClick } = props;

  function onCardClickHandler() {
    handleClick(id, list, title);
  }

  return (
    <>
      <div
        style={{ padding: "10px", margin: "10px", border: "1px solid black" }}
        onClick={onCardClickHandler}
      >
        {title}
      </div>
    </>
  );
}

export default Card;
