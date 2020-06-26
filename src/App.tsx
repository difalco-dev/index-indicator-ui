import React, { Component } from 'react';
import './App.css';
import LoginWrapper from './components/login/LoginWrapper';
import LandingCard from './components/landing/LandingCard';
import DataProvider from './components/landing/DataProvider';

interface Credentials {
  username?: string;
  password?: string;
  model_id?: string;
}

interface Props {
    children: React.ReactNode;
    credentials?: Credentials;
}

class App extends Component<{}, any> {
  constructor(props: any) {
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
          <DataProvider {...this.state}>
            <LandingCard {...this.state} />
          </DataProvider>
        </LoginWrapper>
      </div>
    );
  }
}

export default App;
