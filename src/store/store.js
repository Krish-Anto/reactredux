import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../components/CRUD/productsSlice'
import CartReducer from '../components/CRUD/cartSlice'

const store = configureStore({

    reducer : {
      Products : ProductReducer,
      Cart : CartReducer ,
    }
})
 

export default store