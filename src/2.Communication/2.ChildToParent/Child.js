function Child(props) {
  const { bulletPoint, childCommunicatorHandler } = props;

  // childCommunicatorHandler -> PHONE
  // console.log(bulletPoint, childCommunicatorHandler);

  return (
    <>
      <div style={{ margin: "30px", background: "yellow" }}>
        Child Body
        {bulletPoint}
        <div>
          <button
            onClick={() => {
              childCommunicatorHandler("Hey there I am safe!!");
            }}
          >
            Emergency Infomation{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Child;
