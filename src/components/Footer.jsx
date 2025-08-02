import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      data: null,
      show: true,
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count, show } = this.state;
    // this.state urniga = "count" yozib quysa ham buladi
    return (
      <>
        {show && <h2>footer{this.state.count}</h2>}
        {/* {show ? <h2>footer{this.state.count}</h2> : <></>} */}
        <button onClick={this.inc}> increment</button>
        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}
          //   onClick={() => this.setState({ count: count - 1 })}
          disabled={this.state.count <= 1}
          //   disabled={count <= 1}
        >
          decrement
        </button>
        <button onClick={() => this.setState({ count: 1 })}>reset</button>
        <button onClick={() => this.setState({ show: !show  })}>
            {show ? "hide" : "shou"}
        </button>

        {/* conditional  rendering  */}

        {/* { true ? <p>salom</p> : <button>click</button>} */}
      </>
    );
  }
}
