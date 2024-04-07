import { Component } from "react";
import HelloComponent from "../../1.BasicReact/1.HelloComponent/HelloComponent";
import HelloClassComponent from "../../1.BasicReact/1.HelloComponent/HelloClassComponent";

class CounterClassComponent extends Component {

  state = {
    count: 0,
    name: "utkarsh"
  }

  decrement() {
    // context -> CounterClassComponent
    console.log("decrement ");

    // this.setState({
    //   ...this.state,
    //   count: -90,
    // });

    this.setState((oldState) => {
      return {
        ...oldState,
        count: oldState.count - 1
      }
    })
  }

  increment() {
    console.log("increment ");

    // this.setState({
    //   ...this.state,
    //   count: 100,
    // });

    this.setState((oldState) => {
      return {
        ...oldState,
        count: oldState.count + 1
      }
    })
  }

  render() {
    return (
      <>
        <h1>{"Counter COmponent class"}</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="counter">{this.state.count}</div>
          <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
            <button onClick={this.decrement.bind(this)}>-</button>
            <button onClick={this.increment.bind(this)}>+</button>
          </div>
        </div>

          <div>--------- SELEPRATOR -------------</div>
        <HelloComponent />
        <HelloClassComponent />
      </>
    );
  }
}

export default CounterClassComponent;
