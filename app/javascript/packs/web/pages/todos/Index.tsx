import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CreateForm, Todo, Header } from 'web/components/todos';

// const todosUrl = '/todos'
const todosUrl = 'https://api.myjson.com/bins/17jy56'

export class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    axios
      .get(todosUrl)
      .then(res => this.setTodos(res.data));
  }

  setTodos(todos) {
    this.setState({ todos: todos });
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo todo={todo} key={todo.id} className="todos-Index_listItem"/> )

    return (
      <div className="todos-Index">
        <Header className="todos-Index_header"/>
        <div className="todos-Index_main">
          <div className="todos-Index_sidebar">
            <CreateForm  className="todos-Index_createForm"/>
          </div>
          <div className="todos-Index_list">
            { todos }
          </div>
        </div>
      </div>
    );
  }
}
