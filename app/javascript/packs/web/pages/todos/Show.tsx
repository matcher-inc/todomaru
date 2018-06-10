import * as React from 'react';
import * as api from 'web/api';

export class Show extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { todo: {} };

    this.loadTodo();
  }

  loadTodo() {
    api
      .todos
      .show(this.props.match.params.todoId)
      .then(res => this.setState({ todo: res.data }));
  }


  render() {
    const todo = this.state.todo;
    return (
      <div className="todos-Show">
        <div className="todos-Show_todo">
          <div className="todos-Show_row">
            <label className="todos-Show_heading">タイトル</label>
            <div className="todos-Show_value">{ todo.title }</div>
          </div>
          <div className="todos-Show_row">
            <label className="todos-Show_heading">期日</label>
            <div className="todos-Show_value">{ todo.deadline }</div>
          </div>
          <div className="todos-Show_row">
            <label className="todos-Show_heading">詳細</label>
            <div className="todos-Show_value">{ todo.detail }</div>
          </div>
        </div>
      </div>
    );
  }
}
