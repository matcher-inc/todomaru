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
    const inputs = document.querySelectorAll('#email, #name, #password');
    for (const input of Array.from(inputs)) {
      input.className = 'signin-form__text-field';
    }
    this.props.history.push('/');
    this.props.authenticate();
  }

  handleErrorResponse(response) {
    const inputs = document.querySelectorAll('#email, #name, #password');
    for (const input of Array.from(inputs)) {
      input.className = 'signin-form__text-field signin-form__text-field--error';
    }
  }

  render() {
    return (
      <div className="container">
        <div className="signup-page">
          <h2 className="signup-page__title">ToDoMaRuサインアップ</h2>
          <form className="signup-form" action="/users" method="POST" onSubmit={this.handleSubmit}>
            <div className="signup-form__group">
              <label className="signup-form__label" htmlFor="email">
                Eメールアドレス
                <span className="signup-form__required"> * </span>
              </label>
              <input className="signup-form__text-field" type="email" name="user[email]" id="email" placeholder="Eメールアドレス" required />
            </div>
            <div className="signup-form__group">
              <label className="signup-form__label" htmlFor="name">
                名前
                <span className="signup-form__required"> * </span>
              </label>
              <input className="signup-form__text-field" type="text" name="user[name]" id="name" placeholder="名前" required />
            </div>
            <div className="signup-form__group">
              <label className="signup-form__label" htmlFor="password">
                パスワード(6文字以上)
                <span className="signup-form__required"> * </span>
              </label>
              <input className="signup-form__text-field" type="password" name="user[password]" id="password" placeholder="パスワード" pattern=".{6,}" required />
            </div>
            <div className="signup-form__group">
              <button className="signup-form__submit-button signup-form__submit-button--active" type="submit">登録する</button>
            </div>
          </form>
          <Link to="/sign_in">サインインページへ</Link>
        </div>
      </div>
    );
  }
}
