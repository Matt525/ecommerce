import React from 'react'; 
import {ProductConsumer} from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart'; 
import CartList from './CartList';
import CartTotals from './CartTotals'; 

class Cart extends React.Component{ 
        render(){ 
            return(

                    <ProductConsumer>
                            
                            {value=>{
                                                // Pulling cart value from context state.
                                        const {cart} = value;
                                        const {title} = cart; 
 
                                                if(cart.length>0){

                                                        return (
                                                                <React.Fragment>
                                                                        <Title name="Your" title="Cart" />
                                                                        <CartColumns />
                                                                         {/*Passing value to all components below */}
                                                                        <CartList value={value} />
                                                                        <CartTotals value={value}/>
                                                                </React.Fragment>
                                                        )
                                                }
                
                                return(  
                                        // Else it will return Empty Cart Component. 
                                        <EmptyCart />
                                )
                            }}

                    </ProductConsumer>
            )
        }
}


export default Cart;