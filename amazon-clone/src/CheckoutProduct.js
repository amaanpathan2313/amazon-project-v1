import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id, title, price, image}) {

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
            // remove item from cart
            dispatch({
                type: "REMOVE_FROM_CART",
                id: id,
            })
    }

    return (
        <div className = "CheckoutProduct">
           <img className = "checkoutProductImage" src = {image} alt = " " />
            
           <div className = "CheckoutProduct--info">

              <p className = "CheckoutProduct--title">{title}</p>
              <p className = "CheckoutProduct--price"> 
              <bold>₹</bold>
              <strong>{price}</strong>
             </p> 
             <div className='remove--button'>       
             <button  onClick={removeFromCart}>Remove From Cart</button>          
             </div>  
           </div>
     </div>
    )
}

export default CheckoutProduct

 // className = "CheckoutProduct--info button"