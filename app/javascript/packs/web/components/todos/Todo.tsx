import * as React from 'react';

export default class Todo extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todo.title}
      </div>
    );
  }
}
