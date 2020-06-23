import React, { Component } from 'react';
import './App.css';
import LoginWrapper from './components/login/LoginWrapper';

class App extends Component<{}, any> {
  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Index Indicator
          </div>
        </header>
        <LoginWrapper />
      </div>
    );
  }
}

export default App;
