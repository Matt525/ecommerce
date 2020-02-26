import React from 'react'; 
import {ProductConsumer} from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from '../EmptyCart';


class Cart extends React.Component{ 
        render(){ 
            return(

                    <ProductConsumer>
                            
                            {value=>{
                                    
                                    
                                                // Pulling cart value from context state.
                                        const {cart} = value; 
                                        if(cart.length>0){
                                                return (
                                                        <React.Fragment>
                                                                <Title name="Your" title="Cart" />
                                                                <CartColumns />
                                                        </React.Fragment>
                                                )
                                        }
                
                                return(  
                                        <EmptyCart />
                                )
                            }}

                    </ProductConsumer>
            )
        }
}


export default Cart;