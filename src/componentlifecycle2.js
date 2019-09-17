import React from 'react';

export class SideMenu extends React.Component {
  constructor() {
    super();
    this.CloseMenu = this.CloseMenu.bind(this);
  }
  CloseMenu() {
    console.log('close menu');
  }
  componentDidMount() {
    console.log('didmount');
    document.addEventListener('click', this.CloseMenu);
  }
  componentWillUnmount() {
    console.log('didumount??????????????????//////////');
    document.removeEventListener('click', this.CloseMenu);
  }
  render() {
    console.log('render method2');
    return (
      <div>
        <a href="javascript" onClick={this.CloseMenu}>
          x
        </a>

        <div>some structure</div>
      </div>
    );
  }
}
export default class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isbtnclicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('click menu');
    this.setState((prevstate, props) => ({
      isbtnclicked: !prevstate.isbtnclicked,
    }));
  }

  render() {
    console.log('render method');
    return (
      <div>
        <button onClick={this.handleClick}>try it</button>
        {this.state.isbtnclicked ? <SideMenu /> : null}
      </div>
    );
  }
}
