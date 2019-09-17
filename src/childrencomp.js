import React from 'react';

export class Example extends React.Component {
  render() {
    return (
      <div>
        <div>Children ({this.props.children.length}):</div>
        {this.props.children}
      </div>
    );
  }
}

export class Widget extends React.Component {
  render() {
    return (
      <div>
        <div>
          First <code>Example</code>:
        </div>
        <Example>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Example>
        <div>
          Second <code>Example</code> with different children:
        </div>
        <Example>
          <h1>A</h1>
          <h1>B</h1>
        </Example>
      </div>
    );
  }
}
//export default Widget;

//   export   Widget;
//   export   Example;
