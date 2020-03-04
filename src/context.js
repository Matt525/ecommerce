import React from 'react';
import {storeProducts, detailProduct} from './data';




const ProductContext = React.createContext(); 

class ProductProvider extends React.Component {
    

    // Pulling state from data.js and assigning to pass on to other components

    state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false, 
            modalProduct: detailProduct,
            cartTax: 0,
            cartSubtotal:0,
            cartTotal: 0,
            
    }

    // upon component mount, running setProducts function
    
    componentDidMount(){
            this.setProducts();
    }



    // Iterating through storeProducts via forEach to pull individual items and push them to another defined array.

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
                            // Finding particular product through find. Item.id equal to id passed into argument.
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
                                            
                }, 
                ()=>{
                    this.addTotals();
                })
        };



        
        
        openModal = id =>{
            // Retrieving specific item ID via getItem function above in code.
            const product = this.getItem(id);
            // Changing values within state upon call
            this.setState(()=>{
                return{modalProduct: product, modalOpen:true}
            });
        }




        closeModal = () =>{
            this.setState(()=>{
                return {modalOpen:false};
            });
        }

        // Cart Functions below

        increment = (id) =>{
    
    
        }

        decrement = (id) =>{
            
            console.log("this is the increment function"); 
        }
        removeItem = (id) =>{
            // Remove last element added to array
            console.log("this is the increment function"); 
        }
        clearCart = (id) =>{ 
            let tempProducts = [...this.state.products];
            let index = tempProducts.indexOf(this.getItem(id));
            const product = tempProducts[index];
            product.inCart = false;
            product.count = 0;
            this.setState(()=>{
                return {cart: []}
            })
            

        }

        addTotals=()=>{

                    let subTotal =  this.state.cartSubtotal;
                    // looping through cart to add all item totals to subTotal
                    this.state.cart.map(item=>(subTotal += item.total));
                    const tempTax = subTotal * 0.10;
                    const tax = parseFloat(tempTax.toFixed(2)); 
                    const total = subTotal + tax;
                    this.setState(()=>{
                        return{ 
                            cartSubtotal:subTotal,
                            cartTax: tax,
                            cartTotal: total
                        }
                    })

        }


    render(){
            return (
                // Passing state and variables through to be used on product component
                    <ProductContext.Provider value={{...this.state, 
                        
                            handleDetail: this.handleDetail,
                            addToCart: this.addToCart,
                            openModal: this.openModal,
                            closeModal: this.closeModal,
                            increment: this.increment,
                            decrement: this.decrement,
                            removeItem: this.removeItem,
                            clearCart: this.clearCart
                            }}>
                                
                            {this.props.children}
                       
                    </ProductContext.Provider>
                )
        }
}


const ProductConsumer = ProductContext.Consumer;


export {ProductConsumer, ProductProvider}; 