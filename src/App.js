import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LanguageList from './Statelessfunctionalcomp';
import languages from './languages array';
import Counter from './counter';
import Greeting from './stateinprops';
import ManagedControlDemo from './stateeventmanagedcontrol';
import { ExtendedFirstComponent, ExtendedSecondComponent } from './HCC';
import { Widget } from './childrencomp';
import { App1 } from './complifecycle1';
import MainMenu from './componentlifecycle2';
import { CompUpdate } from './componentlifecycle3';
import { CompParent } from './componentlifecycle4';
import { Form } from './controlledcomponents';
import { Parent } from './communicationbtncomp';
import { HomePage } from './homepage';
import { TodoItem } from './simpletodos';
import Comment from './Comment';
import { ReduxExample1 } from './Reduxexample1';
function Index() {
  return <h2>Home</h2>;
}

function About({ match }) {
  return <h2>About id:{match.params.hell}</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/sups">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/Hello">hello</Link>
            </li>
            <li>
              <Link to="/Comment">Comment</Link>
            </li>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/Greeting">Greeting</Link>
            </li>
            <li>
              <Link to="/LanguageList">LanguageList</Link>
            </li>
            <li>
              <Link to="/Widget">Widget</Link>
            </li>
            <li>
              <Link to="/App1">App1</Link>
            </li>
            <li>
              <Link to="/MainMenu">MainMenu</Link>
            </li>
            <li>
              <Link to="/CompUpdate">CompUpdate</Link>
            </li>
            <li>
              <Link to="/CompParent">CompParent</Link>
            </li>
            <li>
              <Link to="/Form">Form</Link>
            </li>
            <li>
              <Link to="/HomePage">Homepage</Link>
            </li>
            <li>
              <Link to="/todoitem">Todoscreen</Link>
            </li>
            <li>
              <Link to="/ReduxExample1">ReduxExample</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/:hell" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/Hello" component={Hello} />
        <Route path="/Comment" component={Comment} />
        <Route path="/Counter" component={Counter} />
        <Route path="/Greeting" component={Greeting} />
        {/* <Route
          path="/LanguageList"
          render={() => (
            <div>
              <LanguageList languages={languages} />
            </div>
          )}
        /> */}
        <Route path="/LanguageList" component={LanguageList} />
        <Route path="/ManagedControlDemo" component={ManagedControlDemo} />
        <Route path="/Widget" component={Widget} />
        <Route path="/App1" component={App1} />
        <Route path="/MainMenu" component={MainMenu} />
        <Route
          path="/CompUpdate"
          render={() => (
            <div>
              <CompUpdate initialcount="2" name="xxx" />
            </div>
          )}
        />
        <Route path="/CompParent" component={CompParent} />
        <Route path="/Form" component={Form} />
        <Route path="/HomePage" component={HomePage} />
        <Route
          path="/todoitem"
          render={() => (
            <div>
              <TodoItem languages={languages} />
            </div>
          )}
        />
        <Route path="/ReduxExample1" component={ReduxExample1} />
      </div>
    </Router>
  );
}

export default AppRouter;

class Hello extends React.Component {
  constructor(props) {
    super(props);
    const fullname = this.props.name.split(' ')[0];
    this.state = { firstName: fullname, istoggle: false };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick() {
    this.setState((prevState, props) => {
      return { istoggle: !prevState.istoggle };
    });
  }

  render() {
    console.log(this.state.firstName + this.props.title);
    return (
      <h1 onClick={this.handleclick}>
        {' '}
        hello {this.state.firstName}
        {this.state.istoggle ? 'yes' : 'no'}
      </h1>
    );
  }
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  someObject: PropTypes.object,
};
Hello.defaultProps = {
  someObject: {},
  name: 'su d',
  title: 'my default pace',
};

//export default Hello;
