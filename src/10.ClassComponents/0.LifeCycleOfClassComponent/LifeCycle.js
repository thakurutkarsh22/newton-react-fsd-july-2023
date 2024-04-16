import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  //   Errro Boundary: See more in errror boundary
  componentDidCatch() {}

  //   useEffect => Only for Mounting Phase
  componentDidMount() {
    console.log("componentDidMount ");
  }

  //   useEffect => Only for Update Phase

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate ");

    // VVVVIMPORTANT:  Always use If prevstate vs new state comparision and then only
    // update state here

    /* if (prevState.count != this.state.count ) {
        this.setState() -> it is a function given by React to update the state.
    } */
  }

  //   useEffect (Retrun part) =>  only work when the component is going to be unmounted

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render function");
    return (
      <>
        <h1>Hello </h1>
        <h2>What is this</h2>
      </>
    );
  }
}

export default LifeCycle;
