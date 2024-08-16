import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenditure : []
}

const expSlice = createSlice({
    name : "expenditure",
    initialState,
    reducers :{

        addNewExp : (state,action) =>{
            console.log("actions", action)
           let newExp = state.expenditure.push({id : Date.now(),category : action.payload}) 
           console.log(newExp)
        },
        DeleteExp : (state,action) =>{
            
           state.expenditure = state.expenditure.filter((i)=>{
              console.log(i.id)
              return i.id !== action.payload
        }) 
           console.log("Payload id", action.payload)
        }
    }       
})

export const {addNewExp , DeleteExp} = expSlice.actions;
export default expSlice.reducer 