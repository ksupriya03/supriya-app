import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    console.log('çlicked');
    this.setState({ show: !this.state.show });
  }

  handleChange(e) {
    console.log('target vaue' + e.target.value);
    this.setState({ title: e.target.value });
  }

  handleSubmit() {
    console.log('submitted to db');
  }

  render() {
    var clickableTitle;
    if (this.state.show) {
      clickableTitle = (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChange} />
          <h2>the value enterd is {this.state.title}</h2>
        </form>
      );
    } else {
      clickableTitle = <h3 onClick={this.handleClick}>some text</h3>;
    }
    return <div>{clickableTitle}</div>;
  }
}
export default Comment;
