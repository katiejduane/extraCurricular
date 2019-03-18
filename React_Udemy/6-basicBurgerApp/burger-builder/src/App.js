import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/" component={BurgerBuilder} />
          
        </Layout>
      </div>
    );
  }
}

export default App;