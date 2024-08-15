import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Sign from './sign';
import Evl from './Evl';
function App() {
  const[notes,setnotes]=useState([])
  const[res,setres]=useState([])
  
  return(
<div>
<Evl/>
</div>
  )


  
}

export default App;
