import * as React from 'react';

export default class CreateForm extends React.Component<any, any> {
  render() {
    return (
      <div className={this.props.className + ' todos-Header'}>
        <h1 className="todos-Header_title">
          TODOMARU
        </h1>
      </div>
    );
  }
}
