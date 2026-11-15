import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite.jsx";




const ProductCard = ({ product }) => {

  let {setCartItem} = useContext(MyShop);

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-50 p-6">
        <span className="absolute left-4 top-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-sm text-yellow-500">★</span>
            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <button 
          onClick={()=>setCartItem(prev=>[...prev,product])}
          className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard