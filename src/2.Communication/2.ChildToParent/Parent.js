import Child from "./Child";

function Parent() {
  const bulletPoint = "Hey there someone is going to pass you :: bullet point ";

  // childCommunicatorHandler -> PHONE
  const childCommunicatorHandler = (infomation) => {
    console.log(infomation, "infomation HAS BEEN RECIEVED TO PARENT ");
  };

  // childCommunicatorHandler("asdasdasd")

  return (
    <>
      <h1>Parent Body</h1>

      <Child
        childCommunicatorHandler={childCommunicatorHandler}
        name={"utkarsh"}
        bulletPoint={bulletPoint}
      />
    </>
  );
}

export default Parent;
