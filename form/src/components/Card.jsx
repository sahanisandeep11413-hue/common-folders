import React from 'react'

const Card = ({value}) => {
 return ( <div className="w-72 rounded-xl bg-white p-5 shadow-lg">
   {/* Profile Image */} <img src={value.image} alt="User" className="mx-auto mb-4 h-24 w-24 rounded-full object-cover" /> 
   {/* User Info */} <div className="text-center"> <h2 className="text-xl font-bold text-gray-800"> {value.name}</h2>
    <p className="mt-1 text-gray-500"> {value.email} </p> </div>
    {/* Button */} <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"> View Profile </button>
     </div> )
}

export default Card
