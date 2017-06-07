import React, { Component } from 'react';

import './App.css';
import Popular from './Popular';
import { Router, BrowserRouter, } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <BrowserRouter path='/popular' component='Popular' ></BrowserRouter>
        </div>
      </Router>

    );
  }
}

export default App;
