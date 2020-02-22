import React from 'react'
import {ProductConsumer} from'../context';
import {Link} from 'react-router-dom'; 



export default class Modal extends React.Component {
    render(){

    return (
    

        <ProductConsumer>

            {value=>{
                const {showModal, hideModal} = value;
                const {img, title, price, info} = value.modalProduct;
                
                if(!showModal){
                    return null; 
                }

                else{return(
                    
                    
                    <div className="container">
                        <div className="row">

                            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="col-8 col-md-6 col-lg-4 text-center text-capitalize" centered>
                                        <Modal.Header closebutton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Added To Cart
                                            </Modal.Title>
                                        </Modal.Header>
                            </Modal>

                        </div>
                    </div>



                )}

            }}

        </ProductConsumer>
    
    )
}
}
