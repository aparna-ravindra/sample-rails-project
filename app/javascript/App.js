// app/javascript/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Link to="/">
              <br></br>
            <p align ="center">
            <button className="btn btn-success">Home</button>
            </p>
            </Link>
        <hr />
        </div>
        <Routes />
      </Router>
    );
  }
}
