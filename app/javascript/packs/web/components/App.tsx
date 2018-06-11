import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { axios } from 'web/api';
import * as RootPage from 'web/pages';
import * as TodoPage from 'web/pages/todos';
import * as RegistrationPage from 'web/pages/users/registrations';
import * as SessionPage from 'web/pages/users/sessions';

import './App.scss';

class App extends React.Component<any, any> {
  RegistrationPageNew: React.SFC<RegistrationPage.INewProps>;
  SessionPageNew: React.SFC<SessionPage.INewProps>;

  constructor(props) {
    super(props);
    this.state = {firstLoad: false, authed: false};
    this.authenticate = this.authenticate.bind(this);
    this.RegistrationPageNew = (props) => <RegistrationPage.New {...props} authenticate={this.authenticate} />;
    this.SessionPageNew = (props) => <SessionPage.New {...props} authenticate={this.authenticate} />;
  }

  async componentDidMount() {
    const res = await axios.get('/signed_in');
    this.setState({firstLoad: true, authed: !!res.data.id});
  }

  authenticate() {
    this.setState({...this.state, authed: true});
  }

  renderAuthedRouter() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={RootPage.Home} />
          <Route path='/todos' component={TodoPage.Index} />
          <Route path='/users/:userId/todos/:todoId' component={TodoPage.Show} />
        </div>
      </Router>
    );
  }

  renderUnauthedRouter() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={this.SessionPageNew} />
          <Route path='/sign_up' component={this.RegistrationPageNew} />
          <Route path='/sign_in' component={this.SessionPageNew} />
        </div>
      </Router>
    );
  }

  renderLoadingRouter() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={this.SessionPageNew} />
          <Route path='/sign_up' component={this.RegistrationPageNew} />
          <Route path='/sign_in' component={this.SessionPageNew} />
        </div>
      </Router>
    );
  }

  render() {
    if (this.state.firstLoad && this.state.authed) {
      console.log('Call renderAuthedRouter');
      return this.renderAuthedRouter();
    } else if (this.state.firstLoad) {
      console.log('Call renderUnauthedRouter');
      return this.renderUnauthedRouter();
    } else {
      console.log('Call renderLoadingRouter');
      return this.renderLoadingRouter();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});
