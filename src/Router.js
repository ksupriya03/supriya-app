import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    );
  }
}

export default Home;
