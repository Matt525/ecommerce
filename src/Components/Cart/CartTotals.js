import React from 'react'
import {Link} from 'react-router-dom'
export default function CartTotals({value}) {

    
    
    const {cartTotal, cartSubtotal, cartTax, clearCart} = value;

    return (
        <React.Fragment>
                <div className="container">

                    <div className="row  w-100">
                        <div className="col text-capitalize d-flex flex-column text-align-left">
                            <Link to="/">
                                <button class="btn btn-outline-warning" onClick={()=>{clearCart()}}>
                                        Clear Cart <span class="badge badge-primary"></span>
                                </button>
                            </Link>
                        
                        
                            <span><h5>Subtotal: <strong>$ {cartSubtotal}</strong></h5></span>
                            <h5>Tax: <strong>$ {cartTax}</strong></h5>
                            <span></span><h5>Total: <strong>$ {cartTotal}</strong></h5>
                        </div>
                        </div>

                </div>
        </React.Fragment>
    )
}

