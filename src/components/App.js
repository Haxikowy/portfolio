import './scss/App.scss';
import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router';
import { useTransition } from 'react-spring';

import useResize from './../hooks/useResize'
import useTheme from './../hooks/useTheme';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  useResize();
  const [currentTheme, theme, setTheme] = useTheme();  

  const { location } = useContext(__RouterContext).history

  const transition = useTransition(location.pathname, {
    from: {position: 'absolute', opacity: 0, x: 400},
    enter: {position: 'static', opacity: 1, x: 0},
    leave: {position: 'absolute', opacity: 0, x: -400},
  }) 

  return (
    <div className={`App ${currentTheme}`}>
      <Header setTheme={setTheme} />
      <div className="overflow-h"> 
      {transition((style) => (<Switch>
          <Route path="/" exact>
            <Home style={style} theme={theme} />
          </Route>
          <Route path="/work/:project" exact>
            <Work style={style} />
          </Route>
          <Route path="/about" exact>
            <About style={style} theme={theme} />
          </Route>
          <Route path="/contact" exact>
            <Contact style={style} />
          </Route>
        </Switch>)      
      )}
      </div>
      <Footer />
    </div>
  );
};
export default App;
