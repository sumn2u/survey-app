import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import Router from './routes/router';

class App extends Component {
  render() {
    return (
      <Router {...this.props}/>
    );
  }
}

export default App;