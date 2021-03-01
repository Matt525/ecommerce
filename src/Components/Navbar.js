import React from 'react';
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css';
import './Navbar.scss';
import logo from './Photo_source/ecommerce_icon.png';
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
          {/* Card Image */}
        <img src={logo} class="d-flex nav-link" alt="" style={{height: '100px', width: '120px', marginLeft: '100%', }}/>
          </Link>
                  {/* Search Bar & Button */}
              <form class="form-inline" style={{marginLeft: '9%', marginRight: '50px'}}>
                  <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-danger my-sm-0" type="submit"><i class="fas fa-search-location"></i></button>
              </form>
              {/* Shopping Cart */}
              <Link to='/cart'>
                    <i style={shoppingCart} class="fas fa-2x fa-shopping-cart" />
              </Link>
          
              
              <div class="text signin">
                <div class="signin">
                    <Link to="/signin">
                      <a href="#" className="s-link">Sign in</a> |  
                      </Link>
                    <Link>
                      <a href="#" className="s-link"> Register</a>
                    </Link>
                    
                  </div>
				      </div>
              

      </nav>
    </div>



    
  );
}

export default App;

