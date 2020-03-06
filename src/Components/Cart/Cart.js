import React from 'react'; 
import {ProductConsumer} from '../../context';


class Cart extends React.Component{ 
        render(){ 
            return(

                    <ProductConsumer>
                            
                            {value=>{
                                    
                                        const {id, title, img, info} = value.products;
                                        console.log(id);
                                
                                return(  
                                        <div>
                                                <h1>Hello</h1>
                                        </div>
                                )
                            }}

                    </ProductConsumer>
            )
        }
}


export default Cart;