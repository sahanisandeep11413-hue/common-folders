import React, { useState } from 'react'
import Nav from './components/nav'
import Form from './components/Form'
import Card from './components/Card'


const App = () => {
  
 const [toggle, setToggle] = useState(true);
 const [obj, setObj] = useState([]);
 console.log(obj);

 




  return (
    
    <div className='h-screen bg-gray-600'>
      <Nav setToggle={setToggle} />
      { toggle ? obj.map((value)=>
      <Card  value={value} />):
      <Form setToggle={setToggle} setObj={setObj} />}
    </div>
  )
}

export default App
