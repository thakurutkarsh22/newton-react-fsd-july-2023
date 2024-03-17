import App from "../../App";

function HelloComponent(props) {
  console.log(props, "props");
  const { name } = props;

  // const name = props.name;

  return (
    <>
      <div>Hey there {name}</div>
    </>
  );
}

export default HelloComponent;

// JSX -> JavaScript XML
// It looks like it is HTML BUT IT IS NOT  HTML.
// Behind the SCENES the above code (look like HTML) is COnverted to BELOW CODE.
// React.createElement("div", {}, "Hey there Hello to all of you FUNCTIONAL!!!.")

// COMPONENT -> HelloComponent

// Props -> Are nothing but EXTRA information that we can Provide to a COMPONENT.

// State -> Lets Create Counter app.
