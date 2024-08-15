import React, { useEffect, useState } from 'react'

const Evl = () => {

const[num1,setnum1]=useState('')
const[num2,setnum2]=useState('')
const[option,setoption]=useState('')
const[result,setresult]=useState('')
useEffect(()=>{
if(num1 && num2){
  if(option=='>'){
    if(num1>num2){
     setresult('True')
    }
    else{
     setresult('False')
    }
   }
   else if(option=='<'){
     if(num1<num2){
      setresult('True')
     }
     else{
      setresult('False')
     }
    }
    else if(option=='>='){
     if(num1>=num2){
      setresult('True')
     }
     else{
      setresult('False')
     }
    }
    else if(option=='<='){
     if(num1<=num2){
      setresult('True')
     }
     else{
      setresult('False')
     }
    }
    else if(option=='=='){
     if(num1==num2){
      setresult('True')
     }
     else{
      setresult('False')
     }
    }
    else if(option==''){
     setresult('')
    }
}
 

},[num1,num2,option])
return (

    <div>
<div className='container'>
  <div>Evaluvater</div>
    <div>
        <input placeholder='Enter The First Num' type='number' className='in' value={num1} onChange={(e)=>setnum1(e.target.value)}/>
    </div>
    <div className='sel'>
     <select  se onChange={(e)=>{setoption(e.target.value)}}>
      <option selected value='' >Select the operation</option>
      <option defaultValue={'>'}  value='>'>&gt;</option>
      <option value='<'>&lt;</option>
      <option value='>='>&gt;=</option>
      <option value='<='>&lt;=</option>
      <option value='=='>==</option>
     </select>
    </div>
    <div>
        <input placeholder='Enter The Second Num' type='number' className='in' value={num2} onChange={(e)=>setnum2(e.target.value)}/>
    </div>
   <div>{result}</div>
</div>
    </div>
  )
}

export default Evl
