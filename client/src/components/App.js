import React from 'react';
import './App.css';
import SignIn from './molecules/SignIn';
import SignUp from './molecules/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>>
    </div>
    </Router>
  );
}

export default App;
