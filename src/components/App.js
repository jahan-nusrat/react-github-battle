import React, { Component } from 'react';

import './App.css';
import Popular from './Popular';
import Battle from './Battle';
import Home from './Home'
import NavBar from './NavBar'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={()=>{
              return (
                <p>Page Not Found</p>
              )
              }}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
