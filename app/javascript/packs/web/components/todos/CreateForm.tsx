import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class CreateForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      deadline: null,
      detail: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onDeadlineChange = this.onDeadlineChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  onDeadlineChange(date) {
    this.setState({ deadline: date });
  }

  onSubmitClick(e) {
    this.props.onSubmitClick(this.state);
    e.preventDefault();
  }

  clear() {
    this.setState({
      title: '',
      deadline: null,
      detail: '',
    })
  }

  render() {
    return (
      <div className={this.props.className + ' todos-CreateForm'}>
        <form className="todos-CreateForm_form" ref="form">

          <div className="todos-CreateForm_formRow">
            <label className="todos-CreateForm_label">タイトル</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
              className="todos-CreateForm_textField"
            />
          </div>

          <div className="todos-CreateForm_formRow">
            <label className="todos-CreateForm_label">期日</label>
            <DatePicker
              name="deadline"
              selected={this.state.deadline}
              onChange={this.onDeadlineChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="YYYY/MM/DD HH:mm"
              timeCaption="time"
              className="todos-CreateForm_textField"
            />
          </div>

          <div className="todos-CreateForm_formRow">
            <label className="todos-CreateForm_label">詳細</label>
            <textarea
              name="detail"
              value={this.state.detail}
              onChange={this.onChange}
              className="todos-CreateForm_textArea"
            />
          </div>

          <div className="todos-CreateForm_formRow">
            <input
              type="submit"
              value="作成"
              onClick={this.onSubmitClick}
              className="todos-CreateForm_submit"
            />
          </div>

        </form>
      </div>
    );
  }
}
