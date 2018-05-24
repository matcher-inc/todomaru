import * as React from 'react';

export default class Todo extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className + ' todos-Todo'}>
        <div className="todos-Todo_title">
          {this.props.todo.title}
        </div>
        <div className="todos-Todo_deadline">
          {this.props.todo.deadline || "[ 期日なし ]" }
        </div>
      </div>
    );
  }
}
