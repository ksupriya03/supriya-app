import React from 'react';
//import Perf from 'react-addon-perf'
export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showSearchResult: false,
      searchResult: [],
    };
    this.registerClick = this.registerClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
    //this.hideClick=this.hideClick.bind(this)
  }
  registerClick() {
    let users = this.state.users.slice();
    if (users.indexOf(this.refs.mail_id.value) == -1) {
      users.push(this.refs.mail_id.value);
      this.refs.mail_id.value = '';
      this.setState({ users });
    } else {
      alert('user alreay present');
    }
  }
  searchClick() {
    let users = this.state.users;
    let index = users.indexOf(this.refs.search.value);
    if (index >= 0) {
      this.setState({ searchResult: users[index], showSearchResult: true });
    } else {
      alert('no user found');
    }
  }
  hideSearchResult() {
    this.setState({ showSearchResult: false });
  }

  render() {
    return (
      <div>
        <input placeholder="email-id" ref="mail_id" />
        <input type="submit" value="click here to register" onClick={this.registerClick} />
        <input style={{ marginleft: '100px' }} placeholder="search" ref="search" />
        <input type="submit" value="click here to register" onClick={this.searchClick} />
        {this.state.showSearchResult ? (
          <div>
            Search Result:
            <List users={[this.state.searchResult]} />
            <p onClick={this.hideSearchResult.bind(this)}>close this</p>
          </div>
        ) : (
          <div>
            Registred users:
            {this.state.users.length ? <List users={this.state.users} /> : 'no user regisytred'}
          </div>
        )}
      </div>
    );
  }
}
const color = ['red', 'blue', 'green'];
const List = props => {
  return (
    <div>
      {props.users.map((user, i) => {
        return (
          <div key={i} style={{ color: color[i % 3] }}>
            {user}
          </div>
        );
      })}
    </div>
  );
};
