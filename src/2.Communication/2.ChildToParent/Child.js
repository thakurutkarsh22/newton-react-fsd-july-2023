function Child(props) {
  const { bulletPoint, name, childCommunicatorHandler } = props;

  // childCommunicatorHandler -> PHONE
  // console.log(bulletPoint, childCommunicatorHandler);

  // childCommunicatorHandler is a FUNCTION of PARENT
  // If I call childCommunicatorHandler from CHIld, I am actually
  // calling the PARENT function
  // THIS IS EXACTLY HOW THE CHILD WILL COMMUNICATE.

  return (
    <>
      <div style={{ margin: "30px", background: "yellow" }}>
        Child Body
        {bulletPoint}
        {name}
        <div>
          <button
            onClick={() => {
              console.log("emergenncy button clicked in child ");
              childCommunicatorHandler("Emergency is there");
            }}
          >
            Emergency Infomation
          </button>
        </div>
      </div>
    </>
  );
}

export default Child;
