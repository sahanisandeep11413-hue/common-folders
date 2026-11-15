import React from 'react'
import { useForm } from 'react-hook-form';

const Form = ({setToggle,setObj}) => {
 
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

 const onSubmit=(data)=>{
    // setObj(data)
      setObj((prev) => [...prev, data])
     setToggle(true);
  }




  return ( <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
         <h2 className="mb-6 text-2xl font-bold text-gray-800"> Create User </h2>
          {/* Image */} <div className="mb-4"> <label className="mb-2 block font-medium text-gray-700"> Profile Image </label> 
          <input {...register("image")} type="url" className="w-full rounded border border-gray-300 p-2" /> </div>
           {/* Name */} <div className="mb-4"> <label className="mb-2 block font-medium text-gray-700"> Name </label> 
           <input {...register("name")} type="text" placeholder="Enter your name" className="w-full rounded border border-gray-300 p-2 outline-none focus:border-blue-500" /> </div>
            {/* Email */} <div className="mb-6"> <label className="mb-2 block font-medium text-gray-700"> Email </label>
             <input{...register("email")} type="email" placeholder="Enter your email" className="w-full rounded border border-gray-300 p-2 outline-none focus:border-blue-500" /> </div>
              {/* Button */} <button 
               type="submit" className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700" > Create User </button>
               </form> </div>
  )
}

export default Form
