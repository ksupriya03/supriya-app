import React from 'react';

const PrintComponent = ComposedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log('hello' + this.props.name);
    }

    render() {
      return <ComposedComponent {...this.props} onClick={this.handleClick} />;
    }
  };
const FirstComponent = props => <div onClick={props.onClick}>Hello,{props.name} i am first component</div>;

const SecondComponent = props => (
  <div>
    <button onClick={props.onClick}>helli,{props.name} i am second component</button>
  </div>
);

export const ExtendedFirstComponent = PrintComponent(FirstComponent);
export const ExtendedSecondComponent = PrintComponent(SecondComponent);
