import React from 'react'; 
import './Product.scss';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';


export default class Product extends React.Component{ 

    render(){

        // Pulling from Data.js
        const {id, title, img, price, inCart} = this.props.value;
    

        return(
            <ProductConsumer>
                {value=>{
                    
                    return(
                        <div class="col-md-4">
                        <figure class="card card-product">
                        

                            {/* Image Topper */}
                            <Link to="/details">
                                    <div class="img-wrap"><img src={img} alt="product" onClick={()=>{value.handleDetail(id)}} /></div>
                            </Link>
                                    {/* Info Container */}
                                    <figcaption class="info-wrap">
                                            <h4 class="title">{title}</h4>
                                            <p class="desc">Description of the item usually is populated here.</p>
                                            <div class="rating-wrap">
                                                <div class="label-rating">132 reviews</div>
                                                <div class="label-rating">154 orders </div>
                                            </div> 
                                    </figcaption>
        

        
                                    {/* Bottom container */}
                                    <div class="bottom-wrap">
                                        
                                        {/* Button */}
        
                                        <a href="" class="btn btn-sm btn-primary float-right" disabled={inCart?true : false} onClick={(event)=>{
                                            event.preventDefault(); value.addToCart(id); value.openModal(id);
                                            }}>
                                            {inCart?(<a className="in-cart-message" disabled>Item In Cart</a>):(<a href="" class="btn btn-sm btn-primary float-right" disabled>Add To Cart</a>)}
                                        </a>
                                        
                                        {/* Pricing */}
                                            
                                        <div class="price-wrap h5">
                                        <span class="price-new">${price}</span> <del class="price-old">$1094</del>
                                        </div>
                                    </div>
                        </figure>
                    </div>
                    )
                }}

           
            </ProductConsumer>
                    
                    )

                
                
                }
                

        
        }

        // Setting proptypes to check for property types within code.

        Product.propTypes = {
            product:PropTypes.shape({
                id:PropTypes.number,
                img:PropTypes.string,
                title:PropTypes.string,
                price:PropTypes.number,
                inCart:PropTypes.bool
            }).isRequired
        };
 