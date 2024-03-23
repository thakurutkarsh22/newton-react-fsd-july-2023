import Child from "./Child";

function Parent() {
  const infomation = "Hey there someone is going to pass you ";

  return (
    <>
      <h1>Parent Body</h1>

      <Child infomation={infomation} />
    </>
  );
}

export default Parent;
