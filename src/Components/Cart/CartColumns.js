import React, { Component } from 'react'
import {ProductContainer, ProductConsumer} from '../../context';

export default class CartColumns extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {value=>{
                    return(
                        <React.Fragment>
                            <h1>Your Cart</h1>
                        <div className="container-fluid text-center mt-5 mb-0">
                        <div className="row">
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">Products</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">name of product</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">price</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">quantity</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">remove</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">total</p>
                            </div>
                        </div>

                    </div>

                    </React.Fragment>
                    )
                }}

            </ProductConsumer>

        )
        

       

        


    }
}
