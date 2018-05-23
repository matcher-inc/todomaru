import * as React from 'react';

export default class Todo extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todos-Todo">
        {this.props.todo.title}
      </div>
    );
  }
}
