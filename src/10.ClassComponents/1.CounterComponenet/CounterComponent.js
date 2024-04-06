import { Component } from "react";

class CounterClassComponent extends Component {
  state = {
    count: 0,
    abcdezz: 1,
  };

  decrement() {
    console.log("decrement ");

    this.setState({
      ...this.state,
      count: -90,
    });
  }

  increment() {
    console.log("increment ");

    this.setState({
      ...this.state,
      count: 100,
    });
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
      </>
    );
  }
}

export default CounterClassComponent;
