import React from 'react'; 
import Product from './Product';
import './index.css';
import Title from './Title';
import {ProductConsumer} from '../context';
import Banner from './Banner';
class ProductList extends React.Component{
    render(){
        return(            
                // <Product />
                <React.Fragment>
                    <Banner />
                    {/* <Title name="Searched" title="Products" /> */}
                    <div className="py-5">
                            <div className='container d-flex justify-content-center'>
                                
                                
                                {/* All products listed below */}
    
                            <div className="row">
                                   
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
                </React.Fragment>
            
        )
    }

}


export default ProductList;