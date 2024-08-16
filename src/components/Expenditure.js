import React, { useRef } from 'react'
import { addNewExp } from './expSlice'
import { useDispatch } from 'react-redux'

function Expenditure() {

    const inputRef = useRef() 
    const dispatch = useDispatch()

    const AddNew = ()=>{
        console.log(inputRef.current.value)
        dispatch(addNewExp(inputRef.current.value))
    }

  return (
    <div style={{textAlign:"center",paddingTop : "10px"}}>
        <input type='text' ref={inputRef}/>
        <button onClick={AddNew}>Add Exp</button>
    </div>
  )
}

export default Expenditure