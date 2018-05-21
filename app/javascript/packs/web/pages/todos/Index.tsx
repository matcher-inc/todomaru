import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CreateForm, Todo } from 'web/components/todos';

export class Index extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h3>Todo Index!</h3>
        <hr />
        <CreateForm />
      </div>
    );
  }
}
