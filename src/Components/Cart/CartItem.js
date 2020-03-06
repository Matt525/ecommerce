import React from 'react';
import {ProductConsumer} from '../../context'; 
import './cartItem.scss'; 
export default function CartItem({item, value}) {


    // Item & Value are props passed from CartList component.
    const {id, title, price, img, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (    
    
        <div className="row cart-item text-capitalize w-100">
                    
                                <div className="col img-col"><img src={img} /></div>
                                <div className="col"><span></span>{title}</div>
                        <div className="col">
                                
                                    {/* Increment/Decrement Buttons  */}
                                <div id="quantity" className="col">
                                <span>Total: $</span>{total}</div>
                        </div>
                        
                        <div className="col" onClick={()=>{removeItem(id)}}><i class="fas fa-trash"></i></div>
                        <div className="col quantityBtn">
                                <span className="btn btn-primary" onClick={()=>{decrement(id)}}> - </span>
                                <div className="col d-flex justify-content-center" style={{width: '100px'}}>{<h3>{count}</h3>}</div>                                                    
                                <span className="btn btn-primary" onClick={()=>{increment(id)}}> + </span>     
                        </div>
            
        </div>
    
    )
}
