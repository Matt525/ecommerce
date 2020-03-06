import React from 'react'
import {ProductConsumer} from'../context';
import {Link} from 'react-router-dom'; 
import './Modal.scss';



export default class Modal extends React.Component {
    render(){

    return (
    

        <ProductConsumer>

            {value=>{
                // Pulling functions from context.js and assigning to variables. 
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;
                
                // If 'showModal' bool is false, return null
                if(!modalOpen){
                    return null; 
                }

                else{return(
                            <div className="container" id="modal-container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                    <h4 class="title">Item has been added to the cart!</h4>
                                    <img src={img} alt="product image"></img>
                                    <h4>{title}</h4>
                                    <h6>${price}</h6>

                                    <Link to="/">
                                    <button className="btn btn-primary" onClick={()=>{closeModal()}}>Continue Shopping</button>
                                    </Link>
                                    <Link to="/cart">
                                    <button className="btn btn-secondary" onClick={()=>{closeModal()}}>Go to cart</button>
                                    </Link>

                                    </div>
                                </div>
                            </div>
                )}

            }}

        </ProductConsumer>
    
    )
}
}
