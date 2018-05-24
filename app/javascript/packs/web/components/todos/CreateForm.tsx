import * as React from 'react';

export default class CreateForm extends React.Component<any, any> {
  render() {
    return (
      <div className={this.props.className + ' todos-CreateForm'}>
        <form class="todos-CreateForm_form">
          <div class="todos-CreateForm_formRow">
            <label class="todos-CreateForm_label">タイトル</label>
            <input type="text" class="todos-CreateForm_textField"></input>
          </div>
          <div class="todos-CreateForm_formRow">
            <label class="todos-CreateForm_label">期日</label>
            <input type="text" class="todos-CreateForm_textField"></input>
          </div>
          <div class="todos-CreateForm_formRow">
            <label class="todos-CreateForm_label">詳細</label>
            <textarea class="todos-CreateForm_textArea" />
          </div>
          <div class="todos-CreateForm_formRow">
            <input type="submit" class="todos-CreateForm_submit"></input>
          </div>
        </form>
      </div>
    );
  }
}
