import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './cartItem';

export const Cart = () => {

 const cart = useSelector((state)=> state.Cart);
 console.log(cart)

// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div  >
      <div className='shchead'>
      <h2 style={{color:"Orange"}}>Shopping Cart</h2>
      <h3>Cart Value</h3>
      </div>
      <hr style={{ width: '70%', margin: '10px 0',border:'0.1px solid yellow'}}/>
      <div className='cartlist'>
      {cart.map((item,index) => (
          <CartItem key={index} product={item}/>
        ))}
      </div>
      {/* <h3>Total: ${totalAmount.toFixed(2)}</h3> */}
      {/* <div key={item.id}>
<img className='imgcart' src={item.image} alt={item.title}/> - 
 {item.title} - ${item.price} x {item.quantity}
 <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
 <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
 <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
</div> */}
    </div>

 
  )
}
