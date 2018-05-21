import * as React from 'react';
import { Link } from 'react-router-dom';

export class New extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h3>User New!</h3>
        <hr />
        <Link to="/">Topへ</Link>
      </div>
    );
  }
}
