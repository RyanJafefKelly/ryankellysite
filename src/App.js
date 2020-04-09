import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Topbar from './Topbar';

function App() {
  return (
    <Router>
      <React.Suspense>
        <Topbar />
        <Switch>
          <Route exact path="/" name="HomePage" component={HomePage} />
          <Route path="/projects" name="Projects" component={Projects} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
