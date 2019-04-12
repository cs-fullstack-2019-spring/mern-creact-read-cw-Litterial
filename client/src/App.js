import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import MovieList from "./component/MovieList";
import Create from "./component/Create";
class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Movie page</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movielist'> Movie List</Link>
                <Link to='/create'>Create Movie</Link>
                <Route path='/movielist' component={MovieList}/>
                <Route path='/create' component={Create}></Route>
                <Route></Route>

            </nav>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
