import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite.jsx';

const Navbar = () => {
  
  let {setIsCartOpen} = useContext(MyShop);


  return (
    <nav className="bg-black shadow-md px-4 py-2 rounded">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          MyLogo
        </div>

        {/* Center Navigation */}
        <div className="flex gap-8">
          <p
          onClick={()=>setIsCartOpen(false)}
            
            className="text-white  cursor-pointer hover:text-blue-600 font-medium"
          >
            Home
          </p>

          <p onClick={()=>setIsCartOpen(true)}
            
            className="text-white  cursor-pointer hover:text-blue-600 font-medium"
          >
            Cart
          </p>
        </div>

        {/* Login */}
        <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
