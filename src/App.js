import React from "react";
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home'

const App = () => {
  return (
    <div className='app'>
        <h2>Lambda Eats</h2>
        <nav>
          <Link to='/'>
            <button>Home</button>
          </Link>  
          <Link to='/help'>
              <button>Help</button>
          </Link>
        </nav>
        <Home />
        <Switch>
          <Route>

          </Route>
        </Switch>

    </div>
  );
};
export default App;
