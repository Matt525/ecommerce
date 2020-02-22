import React from 'react'
import {storeProducts, detailProduct} from './data'; 
const ProductContext = React.createContext(); 

class ProductProvider extends React.Component {
    

    // Pulling state from data.js and assigning to pass on to other components

    state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            show: true,
            modalProduct: detailProduct



            
    }

    // upon component mount, running setProducts function
    
    componentDidMount(){
            this.setProducts();
    }


    

    setProducts = ()=>{
            let tempProducts = []
            storeProducts.forEach(item=>{
                //   pushing iterated results to 'singleItem'
                    const singleItem = {...item}; 
                    // pushing products and singleItem to products array.
                    tempProducts = [...tempProducts, singleItem]; 

            })
                // assigning to state products results
                this.setState(()=>{
                    return {products:tempProducts}
                })

    }


                            // Pulling item by id 

                        getItem = (id)=>{
                            // Finding particular product through find
                            const product = this.state.products.find(item=> item.id === id);
                            return product;
                            
                        }


                        // Pulling detail page info

                        handleDetail = (id)=>{
                            
                            
                            // setting product found from getItem function to product.
                            const product = this.getItem(id)

                            //   Setting state of detailProduct to the found product from getItem function.
                            this.setState(()=>{
                                return {detailProduct:product}
                            })
                        }


        // ADD TO CART FUNCTION

        addToCart = (id)=>{

                let tempProducts = [...this.state.products]; 
                let index = tempProducts.indexOf(this.getItem(id));
                const product = tempProducts[index]; 
                product.inCart = true;
                product.count = 1;
                const price = product.price;
                product.total = price; 

                    this.setState(()=>{
                        return {products:tempProducts, cart: [...this.state.cart, product]}
                                            
                }, ()=>{
                    console.log(this.state); 
                })
            
        }

        showModal=()=>{
            // Retrieving specific item ID via getItem function above in code.
            const product = this.getItem(id);
            // Changing values within state upon call
            this.setState(()=>{
                return{show:false, modalProduct: product}
            });
            
        }
<<<<<<< HEAD
        addToCart = ()=>{
            console.log("cart handle"); 
=======

        hideModal=()=>{
            this.setState(()=>{
                return{show:false,}
            });
            

>>>>>>> 3b2a0be6e9fb4e579eb54b5931f0099c91e6c7c4
        }

    




        



    render(){

            return (
                // Passing state and variables through to be used on product component
                    <ProductContext.Provider value={{...this.state,
<<<<<<< HEAD
                        // Declaring perameters of value. 
=======
                        
>>>>>>> 3b2a0be6e9fb4e579eb54b5931f0099c91e6c7c4
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    hideModal: this.hideModal,
                    showModal: this.showModal
                    }}>
                    
                        {this.props.children}
                       
                    </ProductContext.Provider>
                )
        }
}


const ProductConsumer = ProductContext.Consumer;


export {ProductConsumer, ProductProvider}; 