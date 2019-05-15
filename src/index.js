import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Game} from './components/Game'

ReactDOM.render(
  <Router>
    <Route exact path="/:state?" component={Game} />
  </Router>,
  document.getElementById('root')
);
