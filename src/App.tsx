import React, { Component } from 'react';
import './App.css';
import LoginWrapper from './components/login/LoginWrapper';

interface Credentials {
  username?: string;
  password?: string;
  model_id?: string;
}

class App extends Component<{}, any> {
  constructor(props: any){
    super(props);
    this.setCredentials = this.setCredentials.bind(this);
  }

  setCredentials(creds: Credentials): void {
    const { username, password, model_id } = creds;
    this.setState({ username, password, model_id }, (): void => {
      console.log(this.state);
    });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <LoginWrapper setCredentials={this.setCredentials}>
          <div>{JSON.stringify(this.state)}</div>
        </LoginWrapper>
      </div>
    );
  }
}

export default App;
