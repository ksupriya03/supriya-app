import React, { Component } from 'react';
class Greeting extends Component {
  constructor() {
    super();
    this.state = { greeting: 'good morning', days: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      days: e.target.value,
    });
  }
  handleClick() {
    this.setState({
      greeting: 'good aftn',
    });
  }
  componentWillMount() {
    this.setState({
      url: this.props.url,
    });
  }
  render() {
    return (
      <div>
        <input defaultValue={2} onChange={this.handleChange} />
        <button onClick={this.handleClick}>clik me</button>
        URL:{this.state.url + '/days?=' + this.state.days}
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default Greeting;
