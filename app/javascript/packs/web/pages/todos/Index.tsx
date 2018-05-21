import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CreateForm, Todo } from 'web/components/todos';

// const todosUrl = '/todos'
const todosUrl = 'https://api.myjson.com/bins/17jy56'

export class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    axios
      .get(todosUrl)
      .then(res => this.setTodos(res.data) );

    this.state = { todos: [] };
  }

  setTodos(todos) {
    this.setState({ todos: todos });
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo todo={todo} key={todo.id}/> )

    return (
      <div>
        <h3>Todo Index!</h3>
        <hr />
        <CreateForm />
        <hr />
        { todos }
      </div>
    );
  }
}
