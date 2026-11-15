import React from 'react'

const Nav = ({setToggle}) => {
  return (
    <div>
      <nav className="bg-black text-amber-50 flex justify-between h-22 p-5">
        <h1 className="">home</h1>
        <div className='flex gap-4'><h4>about</h4>
        <h4>cart</h4></div>
        <button onClick={()=>{
          setToggle(false);
        }}>Getform</button>
      </nav>
    </div>
  )
}

export default Nav
