import React from 'react';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';
import Animations from './components/animation-examples/animation.jsx';
import SymptomForm from './components/form';
import Result from './components/results';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="right">
          <NavBar></NavBar>
            <Switch>
              <Route path="/animate" component={Animations}></Route>
              <Route path="/form" component={SymptomForm}></Route>
              <Route path="/result" component={Result}></Route>
              <Route path="/" exact component={Home}></Route>
              <Redirect to="/"></Redirect>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
