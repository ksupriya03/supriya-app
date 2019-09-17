import React from 'react';

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
    };
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <label>name:</label>
        <input onChange={this.handleChange} value={this.state.name}></input>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
