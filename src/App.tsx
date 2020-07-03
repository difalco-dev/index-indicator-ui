import React, { Component } from 'react';
import './App.css';
import LoginWrapper from './components/login/LoginWrapper';
import LandingCard from './components/landing/LandingCard';
import DataProvider from './components/landing/DataProvider';

export default class App extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.setCredentials = this.setCredentials.bind(this);
  }

  setCredentials(creds: Credentials): void {
    const { username, password } = creds;
    // FETCH MODEL FROM USERNAME
    const model_id = 'model_1';

    this.setState({ username, password, model_id }, (): void => {
      console.log(this.state);
    });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <LoginWrapper setCredentials={this.setCredentials}>
          <DataProvider {...this.state}>
            <LandingCard {...this.state} />
          </DataProvider>
        </LoginWrapper>
      </div>
    );
  }
}

interface Credentials {
  username?: string;
  password?: string;
  model_id?: string;
}
