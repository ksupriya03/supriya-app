import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ManagedControlDemo extends Component {
  static propTypes = {
    message: PropTypes.string,
    position: PropTypes.number,
  };
  static defaultProps = {
    message: 'xxxx',
    position: 1,
  };

  constructor() {
    super();
    this.state = { message: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this);
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    console.log(this.state.message);
    return (
      <div>
        <legend>Type something here</legend>
        <input defaultValue={this.state.message} onChange={this.handleChange} autoFocus />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default ManagedControlDemo;
