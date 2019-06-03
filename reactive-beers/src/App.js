import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import AllBeers from './AllBeers'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import SingleBeer from './SingleBeer'
import Header from './Header'
import { withRouter } from 'react-router'

import './App.css';

function App(props) {
  return (
    <div className="App">
    {props.location.pathname !== "/" && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" exact component={AllBeers} />
        <Route path="/beers/:beerId" component={SingleBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route render={props => <h2>404</h2>} />
      </Switch>

    </div>
  );
}

export default withRouter(App);
