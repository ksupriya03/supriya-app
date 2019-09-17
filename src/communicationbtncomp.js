import React from 'react';

export class Parent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('clicked' + this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log('calling render method');
    return (
      <div>
        Count:{this.state.count}
        <Child handleClick={this.handleClick} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>try it</button>
      </div>
    );
  }
}
