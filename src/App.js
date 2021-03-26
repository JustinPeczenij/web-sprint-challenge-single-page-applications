import React, { useState } from "react";
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
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

const initialFormValues = {
  name:'',
  size:'',
  chicken: false,
  pepperoni: false,
  sausage: false,
  bacon: false,
  instructions:''
}

const initialOrders = []
const initialDisabled = true;

const App = () => {

  const [disabled , setDisabled] = useState(initialDisabled)
  const [orders, setOrders] = useState(initialOrders)
  const [form, setForm] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder= {
      name:form.name.trim(),
      size:form.size.trim(),
      toppings: ['chicken', 'pepperoni', 'sausage', 'bacon'].filter(
        (topping) => form[topping]
      ),
      instructions:form.instructions.trim()
    }
    postNewOrder(newOrder);
  }

  const postNewOrder = (newOrder) => {
    axios.post('https://reqres.in/api/users', newOrder)
    .then((res) => {
      setOrders([res.data, ...orders]);
      setForm(initialFormValues);
      console.log(orders)
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
            <Pizza change={inputChange} form={form} disabled={disabled} submit={formSubmit} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

    </div>
  );
};
export default App;
