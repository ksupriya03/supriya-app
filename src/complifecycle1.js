import React from 'react';

export class App1 extends React.Component {
  constructor() {
    super();
    this.state = { age: 14 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('set init state');
    this.setState((prevstate, props) => {
      return { age: prevstate.age + 5 };
    });
  }
  componentWillMount() {
    console.log('third method will mount');
  }

  componentDidMount() {
    console.log('fifth method called after render');
  }
  render() {
    console.log('fourth method called is render');
    return (
      <h1 onClick={this.handleClick}>
        name:{this.props.name}age:{this.state.age}
      </h1>
    );
  }
}
App1.defaultProps = {
  name: 'supriya',
};
