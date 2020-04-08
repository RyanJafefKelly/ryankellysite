import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Projects from './routes/Projects';


function App() {
  return (
    <HashRouter>
      <React.Suspense>
        <Switch>
          <Route exact path="/" name="Homepage" render={HomePage} />
          <Route path="/projects" name="Projects" render={Projects} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
