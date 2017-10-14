import React, { Component } from 'react';
import './App.css';
import Collection from './container/Collection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Collection />
          <h1 className="App-title">header</h1>
        </header>
        <div>
          body
        </div>
        <footer>
          footer
        </footer>

      </div>
    );
  }
}

export default App;
