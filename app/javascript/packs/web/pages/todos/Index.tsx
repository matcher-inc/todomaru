import * as React from 'react';
import * as api from 'web/api';
import { Link } from 'react-router-dom';
import { CreateForm, Todo, Header } from 'web/components/todos';
import { updateArray } from 'web/utils';

export class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.loadTodos();

    this.addTodo = this.addTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  loadTodos() {
    api
      .todos
      .index()
      .then(res => this.setState({ todos: res.data.reverse() }));
  }

  addTodo(todo) {
    this.state.todos.unshift(todo);
    this.setState({ todos: this.state.todos });
  }

  createTodo(todo) {
    api
      .todos
      .create({todo})
      .then(res => {
        this.addTodo(res.data);
        const createForm = this.refs.createForm as CreateForm;
        createForm.clear();
      });
  }

  updateTodo(todo, params) {
    api
      .todos
      .update(todo.id, params)
      .then(res => {
        const newTodos = updateArray(this.state.todos, {id: todo.id}, res.data);
        this.setState({todos: newTodos});
      });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          className="todos-Index_listItem"
          onTodoChange={(e) => this.updateTodo(todo, {completed_at: e.target.checked ? new Date() : null })}
        />
      )
    })

    return (
      <div className="todos-Index">
        <Header className="todos-Index_header"/>
        <div className="todos-Index_main">
          <div className="todos-Index_sidebar">
            <CreateForm  className="todos-Index_createForm" onSubmitClick={this.createTodo} ref="createForm"/>
          </div>
          <div className="todos-Index_list">
            { todos }
          </div>
        </div>
      </div>
    );
  }
}
