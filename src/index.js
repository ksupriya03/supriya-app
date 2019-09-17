import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './Comment';
import LanguageList from './Statelessfunctionalcomp';
import * as serviceWorker from './serviceWorker';
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
import AppRouter from './App';
import { provider } from 'react-redux';

/* ReactDOM.render(<App name="xxx" />, document.getElementById('root'));
ReactDOM.render(<Comment />, document.getElementById('root'));
ReactDOM.render(<LanguageList languages={languages} />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<Greeting url="https://dev.to/promhize/better-reactjs-patterns-setstate-pitfalls-aj9" />, document.getElementById('root'));
ReactDOM.render(<ManagedControlDemo/>,document.getElementById('root'))
ReactDOM.render(
  <div>
    <ExtendedFirstComponent name="yyyy" />
    <ExtendedSecondComponent name="good" />
  </div>,
  document.getElementById('root'),
);
ReactDOM.render(<Widget />, document.getElementById('root'));
ReactDOM.render(<App1 />, document.getElementById('root'));
ReactDOM.render(<MainMenu />, document.getElementById('root'));
ReactDOM.render(<CompUpdate initialcount="2" name="xxx" />, document.getElementById('root'));
ReactDOM.render(<CompParent />, document.getElementById('root')); */
ReactDOM.render(<AppRouter />, document.getElementById('root'));
//ReactDOM.render(<Form/>,document.getElementById('root'));
//ReactDOM.render(<ManagedControlDemo/>,document.getElementById('root'))
//ReactDOM.render(<Parent/>,document.getElementById('root'))
//ReactDOM.render(<HomePage/>,document.getElementById('root'))
//ReactDOM.render(<TodoItem languages={languages}/>,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
