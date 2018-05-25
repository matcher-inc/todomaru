import * as React from 'react';

export default class CreateForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      deadline: '',
      detail: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  onSubmitClick(e) {
    this.props.onSubmitClick(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className={this.props.className + ' todos-CreateForm'}>
        <form className="todos-CreateForm_form">
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
            <input
              name="deadline"
              type="text"
              value={this.state.deadline}
              onChange={this.onChange}
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
