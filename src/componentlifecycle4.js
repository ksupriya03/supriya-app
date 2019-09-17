import React from 'react';

/*export class CompChild extends React.Component {
    render() {
      return(<div>
        <div>Children ({this.props.children.length}):</div>
        {this.props.children}
      </div>);
    }
  };*/

export class CompParent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.state = {
      name: 'xxx',
      isbtnclicked: false,
    };
  }
  handleClick() {
    console.log('clciked');
    this.setState((prevstate, props) => ({ isbtnclicked: !prevstate.isbtnclicked }));
  }
  stateChange() {
    this.setState({ name: 'yyyy' });
  }

  render() {
    //console.log('render in parent')
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <button onClick={this.stateChange}>prop change</button>
        {this.state.isbtnclicked ? <CompChild name={this.state.name} /> : null}
      </div>
    );
  }
}

export class CompChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'test',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      message: 'gggg',
    });
  }
  componentWillMount() {
    console.log(' will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  componentWillReceiveProps(nextprops) {
    console.log('updating');
  }
  componentWillUnmount() {
    console.log('unmounting');
  }
  /* shouldComponentUpdate(nextProps,nextState)
     {
       console.log(' should component update')
     } */
  componentDidUpdate(PrevProps, prevState) {
    console.log(' did component update');
  }
  render() {
    console.log('render for child');
    return (
      <div>
        {' '}
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick}>child comp</button>
      </div>
    );
  }
}
//export const CompChild=({name})=>{return(<h1>{name}</h1>)}
