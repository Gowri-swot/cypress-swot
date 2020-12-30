import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import reducer from './reducers';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";



export const  store = createStore(reducer);

  if (window.Cypress) {
    window.store = store;
  }
//https://gowrikumar-personalswot.medium.com/cypress-emerging-automate-frontend-testing-framework-8c95f414dd93
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
                    <Route exact path={'/products'} component={Home}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact patr={'/cart'} component={ShoppingCart}/>
                </Switch>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
  }

}

export default App;
