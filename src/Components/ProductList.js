import React from 'react'; 
import Product from './Product';
import './index.css';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
class ProductList extends React.Component{
    render(){
        return(            
                // <Product />
                <React.Fragment>
                    <div className="py-5">
                            <div className='container d-flex justify-content-center'>
                                
                                <Title name="Our" title="Products" />
                                {/* All products listed below */}
    
                            <div className="row">
                                <div className="col mt-0">
                                        <ProductConsumer>
                                            {value=>{
                                                return value.products.map(listItems=>{
                                                    return(
                                                            <Product key={listItems.id} value={listItems} />
                                                    )}
                                                )

                                            }}
                                        </ProductConsumer>
                                    </div>

                                 </div>
                            </div>
                    </div>
                </React.Fragment>
            
        )
    }

}


export default ProductList;