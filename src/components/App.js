import './scss/App.scss';
import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router';
import history from '../history';
import Header from './Header';
import Home from './Home';

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const currentTheme = theme ? 'light-theme' : 'dark-theme';

  return (
    <div className={`App ${currentTheme}`}>
      <Router history={history}>
        <Header history={history} setTheme={setTheme} theme={theme} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
