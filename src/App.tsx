import React, { ReactNode } from "react";
import "./App.less";

class Props {}

class State {}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    return <div>App</div>;
  }
}
