import React from 'react';
import Navbar from './Components/Navbar';
import Details from './Components/Details'; 
import Cart from './Components/Cart';
import Default from './Components/Default'; 
import ProductList from './Components/ProductList';
import Modal from './Components/Modal'; 
import {Switch, Route} from 'react-router-dom'; 

import './Components/index.css';

// Importing bootstrap VVVV
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render(){

  return (
    <React.Fragment>
          <Navbar />
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
              </Switch>
              <Modal />
    </React.Fragment>
    );
  }
}

export default App;