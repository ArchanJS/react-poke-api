import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Details from './components/poke/Details';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/details/:id' component={Details}/>
      </Switch>
    </>
  )
}

export default App
