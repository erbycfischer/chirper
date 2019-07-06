import React from 'react';
import './App.css';
import SignIn from './molecules/SignIn';
import SignUp from './molecules/SignUp';
import Feed from './molecules/Feed';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/feed" component={Feed} />
        </Switch>>
    </div>
    </Router>
  );
}

export default App;
