import App from "../../App";

function HelloComponent(props) {
  console.log(props, "props");
  const { name } = props;

  // const name = props.name;

  return (
    <div style={{ background: "red", padding: "20px", margin: "20px" }}>
      Hey there {name}
      <div>alexa</div>
    </div>

    // THIS WILL NEVER WORK
    // {/* <div>alexa</div> */}
  );

  // BEHIND THE SCENE you are doing this...
  // From a single funciton you cant sent 2 values BACK
  // return React.createElement(
  //   "div",
  //   { style },
  //   React.createElement("div", {}, "alexa")
  // );
  // return React.createElement("div", {}, ` alexa`);
}

export default HelloComponent;

// JSX -> JavaScript XML
// It looks like it is HTML BUT IT IS NOT  HTML.
// Behind the SCENES the above code (look like HTML) is COnverted to BELOW CODE.
// React.createElement("div", {}, "Hey there Hello to all of you FUNCTIONAL!!!.")

// COMPONENT -> HelloComponent

// Props -> Are nothing but EXTRA information that we can Provide to a COMPONENT.

// State -> Lets Create Counter app.
