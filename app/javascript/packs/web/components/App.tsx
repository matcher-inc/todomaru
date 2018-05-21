import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as RootPage from 'web/pages';
import * as TodoPage from 'web/pages/todos';
import * as SessionPage from 'web/pages/users/sessions';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={RootPage.Home} />
          <Route path='/todos' component={TodoPage.Index} />
          <Route path='/sign_in' component={SessionPage.New} />
        </div>
      </Router>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});
