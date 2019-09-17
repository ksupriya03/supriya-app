import React from 'react';

export class CompUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialcount,
    };
    this.upCount = this.upCount.bind(this);
  }
  upCount() {
    this.setState(prevstate => ({
      count: prevstate.count + 1,
    }));
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (nextProps.initialcount && nextProps.initialcount > this.state.count) {
      this.setState({
        count: nextProps.initialcount,
      });
    }
  }
  render() {
    console.log('render method');
    return (
      <div>
        hello,{this.props.name}no of times clicked{this.state.count}
        <button onClick={this.upCount}>try it</button>
      </div>
    );
  }
}
