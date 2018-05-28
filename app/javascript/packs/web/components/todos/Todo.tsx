import * as React from 'react';
import * as moment from 'moment';

export default class Todo extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const d = moment(this.props.todo.deadline);
    const deadline = d.isValid() ? d.format("YYYY-MM-DD HH:mm") : '[期日なし]';

    return (
      <div className={this.props.className + ' todos-Todo'}>
        <div className="todos-Todo_title">
          {this.props.todo.title}
        </div>
        <div className="todos-Todo_deadline">
          { deadline }
        </div>
      </div>
    );
  }
}
