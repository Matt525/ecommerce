import React, { Component } from 'react'
import {ProductContainer, ProductConsumer} from '../../context';
import './columnStyle.scss'; 

export default class CartColumns extends Component {
    render() {

        
        return (
            <ProductConsumer>
                {value=>{
                    return(
                        <React.Fragment>
                                <h1 className="text-center">Your Cart</h1>
                                        
                                            <div id="labels" className="row">
                                                <div className="col-sm item-column text-center">
                                                    <h4 className="text-uppercase">Products</h4>
                                                </div>
                                                <div className="col-sm item-column text-center">
                                                    <h4 className="text-uppercase">name of product</h4>
                                                </div>
                                                <div className="col-sm item-column text-center">
                                                    <h4 className="text-uppercase">price</h4>
                                                </div>
                                                <div className="col-sm item-column text-center">
                                                    <h4 className="text-uppercase">Remove</h4>
                                                </div>
                                                <div className="col-sm item-column text-center">
                                                    <h4 className="text-uppercase">quantity</h4>
                                                </div>               
                                        </div>
                    </React.Fragment>
                    )
                }}

            </ProductConsumer>

        )
        

       

        


    }
}
