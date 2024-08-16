import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name : "cart",
    initialState : [],
    reducers :{
           
        addToCart :(state,action) =>{
          const product = state.find((item) => item.id === action.payload.id);
          
      if (product) {
        product.quantity += 1;
      } else {console.log(action.payload)
        state.push({ ...action.payload, quantity: 1 });
        
      }

        },
        removeItem: (state, action) => {
          return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity: (state, action) => {
          const product = state.find(item => item.id === action.payload.id);
          if (product) {
            product.quantity += 1;
            product.TotalPrice = product.quantity*product.discountPercentage
          }
        },
        decrementQuantity: (state, action) => {
          const product = state.find(item => item.id === action.payload.id);
          if (product) {
            if (product.quantity > 1) {
              product.quantity -= 1;
              product.TotalPrice = product.quantity*product.discountPercentage
            } else {
              const productIndex = state.findIndex(item => item.id === action.payload.id);
              state.splice(productIndex, 1); // Remove item from cart if quantity reaches 0
            }
          }
    }
  }

})
export const {addToCart,removeItem,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer