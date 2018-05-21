import * as React from 'react';

const LOAD_TIME_LOWER_LIMIT = 1000;

export interface RootState {
  next: boolean,
}

export abstract class Root<T, S extends RootState> extends React.Component<T, S> {
  constructor(props) {
    super(props);
    this.state = { next: false } as S;
  }

  componentDidMount() {
    setTimeout(() => this.onEnter(), LOAD_TIME_LOWER_LIMIT);
  }

  async onEnter() {
    this.next(true);
  }

  next(flag: boolean) {
    this.setState({ next: flag });
  }

  withLoad(component: any) {
    if (this.state.next) {
      return component;
    } else {
      return <div>Now Loading...</div>;
    }
  }
}
