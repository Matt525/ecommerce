import React from 'react'
import {storeProducts, detailProduct} from './data'; 
const ProductContext = React.createContext(); 

class ProductProvider extends React.Component {
    
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }

        handleDetail = ()=>{
            console.log("Detail handle")
        }
        addToCart = ()=>{
            console.log("cart handle")
        }

    render(){
            return (
                    <ProductContext.Provider value={{...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                    }}>
                        {this.props.children}
                    </ProductContext.Provider>
                )
        }
}


const ProductConsumer = ProductContext.Consumer;


export {ProductConsumer, ProductProvider}; 