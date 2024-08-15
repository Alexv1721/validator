import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = ({setres}) => {
const[name,setname]=useState('')
const[nameerr,setnameerr]=useState('')
const[email,setemail]=useState('')
const[emailerr,setemailerr]=useState('')
const[pass,setpass]=useState('')
const[passerr,setpasserr]=useState('')
const[emtyerr,setemtyerr]=useState('')
const[date,setdate]=useState('')
const[dateerr,setdaterr]=useState('')
const[nation,setnation]=useState('')
const[nationerr,setnationerr]=useState('')
const[other,setother]=useState(false)
const[generr,setgenerr]=useState('')
const[gen,setgen]=useState('')
const[hobbies,sethobbies]=useState([])

const[hobbieserr,sethobbieserr]=useState('')
const nav=useNavigate('')
const handleradio=(e)=>{
setgen(e.target.value)
}

const handlecheck=(e)=>{
  sethobbies([...hobbies,e.target.value])
  console.log(hobbies);
}
const handleclick=(e)=>{
  e.preventDefault()
const d=new Date()

{
  if(name===''){
    setnameerr('Name cant be Emty')
    }
    else if(!isNaN(parseInt(name))){
      setname('')
    setnameerr("Name shouldnt constain any number ")

    }
    else if(/[^a-zA-Z0-9\s]/.test(name)){
      setname('')
    setnameerr('Name shouldnt constain any special charecters')
    
    }
    else{
      setnameerr('')
    }
    if(email==''){

      setemailerr('Email cant be emty')
    }
    else if(!email.includes('@')){
      setemail('')
      setemailerr('Invalid Eamil id')
      
    }
    else{
      setemailerr('')
    }
    
    if(pass===''){
      setpasserr('Password cant be Emty')
    }
    else if(pass.length<8){
      setpass('')
      setpasserr('Password leangth must be greater than 8')
     
    }
    else{
      setpasserr('')
    }
    if(date===''){
      setdaterr('Date cant be Emty')
    }
    
    else if(d.toLocaleDateString('en-CA')==date || date<d){
      setdate('')
      setdaterr('Enter the correct dob')

    }
    else{
      setdaterr('')
    }
    if(gen===''){
      setgen('')
      setgenerr('select The Gender')
    }
    else{
      setgenerr('')
    }
    
    if(hobbies.length<-1 || hobbies.length=='' ){
      sethobbies('')
      sethobbieserr('Hobbies Cant be Emty')
      
    }
    else{
      sethobbieserr('')

    }
    //
    setres([{id:1,name:name,email:email,pwd:pass,dob:date,hob:hobbies,gen:gen,nation:nation}])
   nav('sign/1')

 

}
}

  return (
    <div>
      <div>
        <form  method='push'> 

       <div>
       <div className='errormsg'>{nameerr}</div>
      <div>
      <label >Name: </label>
            <input id='name' type='text' className='inp' onChange={(e)=>{
                setname(e.target.value)
            }}/>
      </div>
        </div>

          <div>
            <div className='errormsg'>{emailerr}</div>
            <label>Email: </label>
            <input type='email' className='inp' onChange={(e)=>{setemail(e.target.value)}}/>
          </div>
       <div>
       <div className='errormsg'>{passerr}</div>
        <label>Password: </label>
       <input type='password' className='inp' onChange={(e)=>{setpass(e.target.value)}}/>
       </div>

         <div>
          <div className='errormsg'>{dateerr}</div>
          <label>Date of Birth: </label>
         <input type='date' onChange={(e)=>{
setdate(e.target.value)
         }}/>
         </div>
         <div className='errormsg'>{hobbieserr}</div>
      <div className='hobbies'><label>Hobbies: </label>
            <label>Traveling:<input type='checkbox' value='Travelling'
        onClick={(e)=>{
          handlecheck(e)
        }}    /></label>
            <label>Cooking:  <input type='checkbox'   onChange={(e)=>{
          handlecheck(e)
        }}  value='cooking'/></label>
            <label>Reading: <input type='checkbox'   onChange={(e)=>{
          handlecheck(e)
        }}  value='Reading'/></label>
            </div>

            <div className='errormsg'>{generr}</div>
        <div className='gender'> <label>Gender: </label>
            <label>Male<input onChange={(e)=>{
              handleradio(e)
            }} type='radio' name='gen' value='male'/></label>
            <label>Female<input onChange={(e)=>{
              handleradio(e)
            }} type='radio' name='gen' value='female'/></label>
            <label>Others<input onChange={(e)=>{
              handleradio(e)
            }} type='radio' name='gen' value='other'/></label></div>
          

          <div className='nat'>
          <label>Nationlity :
            <select onChange={(e)=>{
              setnation(e.target.value)
             if(e.target.value=='other'){
              setother(true)
              }
            }}>
                <option value='Indian'>Indian</option>
                <option value='other'>Other</option>
                
            
            </select>
            <div>{other?<input type='text' onChange={(e)=>{
              setnation(e.target.value)
            }}/>:<span></span>}</div></label>

          </div>
          <div className='bn'>
            <button type='submit' onClick={handleclick}>Submit</button>  <button type='clear'>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
