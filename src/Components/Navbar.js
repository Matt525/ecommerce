import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import logo from './ecommerce_icon.png';
import {Link, Router} from 'react-router-dom';

function App() {
  const shoppingCart = { 
    marginLeft: '25%',
    color: '#fff'
  }
  return (
    <div>
            {/*Navbar*/}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
        <img src={logo} class="d-flex nav-link" alt="" style={{height: '80px', width: '100px', marginLeft: '400%', }}/>
          </Link>
              <form class="form-inline" style={{marginLeft: '65%'}}>
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-primary my-2 my-sm-0 " type="submit">Search</button>
              </form>
              <Link to='/cart'>
                    <i style={shoppingCart} class=" nav-link fas fa-2x fa-shopping-cart" />
              </Link>

      </nav>
    </div>
    
  );
}

export default App;

