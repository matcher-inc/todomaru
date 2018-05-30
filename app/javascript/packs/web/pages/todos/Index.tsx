import * as React from 'react';
import * as api from 'web/api';
import { Link } from 'react-router-dom';
import { CreateForm, Todo, Header } from 'web/components/todos';

export class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.loadTodos();

    this.addTodo = this.addTodo.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.onTodoClick = this.onTodoClick.bind(this)
  }

  loadTodos() {
    api
      .todos
      .index()
      .then(res => this.setState({ todos: res.data }));
  }

  addTodo(todo) {
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos });
  }

  createTodo(todo) {
    api
      .todos
      .create({todo})
      .then(res => this.addTodo(res.data));
  }

  onTodoClick(todo) {
    // TODO: routerを使ってtodo詳細へ遷移
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo todo={todo} key={todo.id} className="todos-Index_listItem" onClick={this.onTodoClick(todo)}/> )

    return (
      <div className="todos-Index">
        <Header className="todos-Index_header"/>
        <div className="todos-Index_main">
          <div className="todos-Index_sidebar">
            <CreateForm  className="todos-Index_createForm" onSubmitClick={this.createTodo}/>
          </div>
          <div className="todos-Index_list">
            { todos }
          </div>
        </div>
      </div>
    );
  }
}
