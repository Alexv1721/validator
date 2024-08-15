import React from 'react'
import { useParams } from 'react-router-dom'
const Sign = ({res,setres}) => {
    const {num}=useParams()
  return (
    <div>
        
{
res.map((obj)=>{
    return(<div>{obj.name}</div>)
})
}

    </div>
  )
}

export default Sign
