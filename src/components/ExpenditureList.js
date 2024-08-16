import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteExp } from './expSlice'

function ExpenditureList() {
    const expList = useSelector((state)=>state.MyExpenditure.expenditure)
    console.log("expdata",expList)
    const dispatch = useDispatch()

    const delExp = (id) =>(
        dispatch(DeleteExp(id))
    )

  return (
    <div> ExpenditureList
        {expList.map((item,id)=>(
            <li key={id}>{item.category}
             <button onClick={()=>delExp(item.id)}>delete</button> 
            </li>
        ))}
    </div>
  )
}

export default ExpenditureList