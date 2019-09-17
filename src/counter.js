import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  incrementCounter() {
    this.setState(
      prevstate => ({
        ...prevstate,
        counter: prevstate.counter + 1,
      }),

      //counter:this.state.counter+1
    );
    console.log(this.state.counter);
  }
  componentDidMount = () => {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  };

  render() {
    return <h1>{this.state.counter}</h1>;
  }
}
export default Counter;
