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
                }, ()=>{
                    console.log(this.state); 
                })

        }

        
        
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
            // set state to tempCart for this function
            let tempCart = [...this.state.cart]; 
            // set variable for selected product that matches ID. Returning first matching element within the array.
            const selectedProduct = tempCart.find(item=>item.id === id);
            // index variable returns index of item within array.
            const index = tempCart.indexOf(selectedProduct); 
            
            const product = tempCart[index];
            
            product.count = product.count +1;
            product.total = product.total * 0.10;


        }

        decrement = (id) =>{
            let tempCart = [...this.state.cart];
            const selectedProduct = tempCart.find(item=>item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index]; 
            product.count = product.count -1; 
            product.count = product.total  * 0.10; 
        }

        removeItem = (id) =>{
            // Remove last element added to array
                let tempProducts = [...this.state.products];
                let tempCart = [...this.state.cart];
                tempCart = tempCart.filter(item=>item.id!==id);
                const index = tempProducts.indexOf(this.getItem(id));
                let removedProduct = tempProducts[index];
                removedProduct.inCart = false;
                removedProduct.count = 0;
                removedProduct.total = 0;

                this.setState(()=>{
                    return { 
                        cart:[...tempCart], products:[...tempProducts],
                    }
                },()=>{
                    this.addTotals();
                })
            
             
        }
        clearCart = (id) =>{ 
            this.setState(()=>{
                return {cart: []}
            },()=>{
                this.setProducts();
                this.addTotals();

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