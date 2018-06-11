import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { axios } from 'web/api';
import './New.scss';

export interface INewProps extends RouteComponentProps<any> {
  authenticate: () => void;
}

export interface INewState {
}

export class New extends React.Component<INewProps, INewState> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submitForm(event.currentTarget);
  }

  async submitForm(form) {
    const request = axios.request({
      method: form.method,
      url: form.action,
      responseType: 'application/json',
      data: new FormData(form),
    });

    try {
      const response = await request;
      this.handleSuccessfulResponse(response);
    } catch (error) {
      const response = error.response;
      this.handleErrorResponse(response);
    }
  }

  handleSuccessfulResponse(response) {
    const inputs = document.querySelectorAll('#email, #password');
    for (const input of Array.from(inputs)) {
      input.className = 'signin-form__text-field';
    }
    this.props.history.push('/');
    this.props.authenticate();
  }

  handleErrorResponse(response) {
    const inputs = document.querySelectorAll('#email, #password');
    for (const input of Array.from(inputs)) {
      input.className = 'signin-form__text-field signin-form__text-field--error';
    }
  }

  render() {
    return (
      <div className="container">
        <div className="signin-page">
          <h2 className="signin-page__title">ToDoMaRuサインイン</h2>
          <form className="signin-form" action="/users/sign_in" method="POST" onSubmit={this.handleSubmit}>
            <div className="signin-form__group">
              <label className="signin-form__label" htmlFor="email">
                Eメールアドレス
              </label>
              <input className="signin-form__text-field" type="email" name="user[email]" id="email" placeholder="Eメールアドレス" required />
            </div>
            <div className="signin-form__group">
              <label className="signin-form__label" htmlFor="password">
                パスワード
              </label>
              <input className="signin-form__text-field" type="password" name="user[password]" id="password" placeholder="パスワード" pattern=".{6,}" required />
            </div>
            <div className="signin-form__group">
              <button className="signin-form__submit-button signin-form__submit-button--active" type="submit">ログイン</button>
            </div>
          </form>
          <Link to="/sign_up">登録ページへ</Link>
        </div>
      </div>
    );
  }
}
