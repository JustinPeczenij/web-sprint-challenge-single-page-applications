import React from "react";
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Pizza from './Components/Pizza'

const StyledHeader = styled.header`
  display:flex;
  justify-content: space-around;
  align-items:center;
`;

const StyledH2 = styled.h2`
  color: red;
  font-size:1.8rem;
`;

const StyledNav = styled.nav`
  width: 50%;
  text-align:end;
`;

const StyledNavButton = styled.button`
  width: 20%;
  margin: 4% 0;
  padding:1% 0;
  border: 2px solid black;
`;

const App = () => {
  return (
    <div className='app'>
        <StyledHeader>
          <StyledH2>Lambda Eats</StyledH2>
          <StyledNav>
            <Link to='/'>
              <StyledNavButton>Home</StyledNavButton>
            </Link>  
            <Link to='/help'>
                <StyledNavButton>Help</StyledNavButton>
            </Link>
          </StyledNav>
        </StyledHeader>
        <Switch>
          <Route path='/pizza'>
            <Pizza />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

    </div>
  );
};
export default App;
