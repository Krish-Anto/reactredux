import React from 'react'
import { decrementQuantity, incrementQuantity, removeItem } from './CRUD/cartSlice'
import { useDispatch } from 'react-redux'


function CartItem({product}) {
     console.log(product)
     const dispatch = useDispatch()
     const handleRemove = ()=>{
      
        dispatch(removeItem(product))
    }
    const handleReduceQty = ()=>{
      
      dispatch(decrementQuantity(product))
  }
  const handleAddQty = ()=>{
      
    dispatch(incrementQuantity(product))
}

const totalPrice = product.price * product.quantity;
const disc = product.discountPercentage/100;
const DiscPrice = (totalPrice*disc).toFixed(3);
const PriceafterDisc = (totalPrice - DiscPrice).toFixed(2);
  return (
    <div  className = "cart1" >
           <div className='imgcart'>
           <img  src={product.image} alt={product.title}/>
           </div> 
           <div>
           <div className='cartAcc'>
           {product.title} - 
           <div>
          Unit Price : ${product.price}/Per Qty.
           </div> 
           <div>
           Quantity : <button onClick={handleAddQty}>+</button>
           {product.quantity}
           <button onClick={handleReduceQty}>-</button>
           </div>
           Price     : ${totalPrice}
           <div>
           Discount  : ${DiscPrice}
           </div>
           <div>
           Amount to Pay : ${PriceafterDisc}
           </div>
           <button onClick={handleRemove}>Remove</button>
           </div>
           </div>
            
    </div>
  )
}

export default CartItem