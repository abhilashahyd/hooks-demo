import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Users from './containers/Users';
import UsersClass from './containers/Users-class';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar/>
      <Users/>
      <UsersClass/>
      </div>
    );
  }
}

export default App;
