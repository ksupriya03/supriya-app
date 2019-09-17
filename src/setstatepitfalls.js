import React, { Component } from '.react';

class Myclass extends Component {
  constructor() {
    super();
    this.state = { user: '', xhr: null };
  }
  componentDidMount() {
    this.fetchUser();
  }
  componentWillUnmount() {
    let xhr = this.state.xhr;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
  }
  fetchUser() {
    let xhr = $.get('/api/users/self').then(user => {
      this.setState({ user: user });
    });
    this.setState({ xhr: xhr });
  }
  render() {
    return <h1>this.state.user</h1>;
  }
}
