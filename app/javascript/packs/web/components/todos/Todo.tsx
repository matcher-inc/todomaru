import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

export default class Todo extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const d = moment(this.props.todo.deadline);
    const deadline = d.isValid() ? d.format("YYYY-MM-DD HH:mm") : '[期日なし]';

    return (
      <div className={this.props.className + ' todos-Todo'}>
        <Link to={`/users/me/todos/${this.props.todo.id}`}>
          <div className="todos-Todo_title">
            {this.props.todo.title}
          </div>
          <div className="todos-Todo_deadline">
            { deadline }
          </div>
        </Link>
        <input
          type="checkbox"
          name="completed_at"
          checked={!!this.props.todo.completed_at}
          onChange={this.props.onTodoChange}
        />
      </div>
    );
  }
}
