import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          <li><Link to="/sign_in">ログイン</Link></li>
          <li><Link to="/todos">Todoリスト</Link></li>
        </ul>
      </div>
    );
  }
}
