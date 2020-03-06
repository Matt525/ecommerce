import React from 'react';
import './Details.scss';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'; 

export default class Details extends React.Component{ 

    render(){ 
        return(


            <ProductConsumer>            
                    {value=>{
                        const {id, company, title, img, price, info, inCart} = value.detailProduct; 

                        return ( 

                    <React.Fragment>
                                <div className="row top-banner d-flex justify-content-center">
                        <h1 className="banner-text">Product View</h1>
                                </div>

                     <div className="container d-flex justify-content-center">
                
                                        <div className="row">
                                            <div className="col-sm-8 image"><img src={img} className="product-image" /></div>
                                            <div className="col-sm-4" style={{paddingTop: '8%'}}>
                                                <strong>{company}</strong>
                                                <h1>{title}</h1>
                                                <h3>${price}</h3>
                                                <p>{info}</p>
                                                <button onClick={()=>{value.addToCart(id); value.openModel(id)}} className="btn btn-sm btn-primary" disabled={inCart?true:false}>Add To Cart</button>
                                                &nbsp;&nbsp;
                                                <button className="btn btn-sm btn-info">Back to Results</button>
                                            </div>    
                                     </div>
                    </div>
                    <div className="row top-banner d-flex justify-content-center">
                        <h1 className="banner-text">Product View</h1>
                                </div>
                    </React.Fragment>

                        )

                    }}

            </ProductConsumer>
    

    
        )
    }
}