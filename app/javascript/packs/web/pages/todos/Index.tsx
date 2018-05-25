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

    this.loadTodos();
    this.addTodo = this.addTodo.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.onTodoClick = this.onTodoClick.bind(this)
  }

  loadTodos() {
    axios
      .get(todosUrl)
      .then(res => this.setState({ todos: res.data }));
  }

  addTodo(todo) {
    todo.id = 123;
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos });
  }

  createTodo(params) {
    axios
      .post(todosUrl, {todo: params})
      .then(res => this.addTodo(params));
    this.addTodo(params)
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
