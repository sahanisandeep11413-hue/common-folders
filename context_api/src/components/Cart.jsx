import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {

   let {cartItem , setCartItem} = useContext(MyShop);
   
   const removeItem = (id) => {
  setCartItem(cartItem.filter((item) => item.id !== id));
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-1">
            {cartItem.length} item{cartItem.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {cartItem.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <div className="text-6xl mb-4">🛒</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Cart Products */}
            <div className="lg:col-span-2 space-y-4">
              {cartItem.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm p-5 flex gap-5"
                >
                  {/* Product Image */}
                  <div className="w-28 h-28 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 text-lg line-clamp-2">
                      {product.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {product.category}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-bold text-blue-600">
                        ${product.price}
                      </p>

                      <button  onClick={() => removeItem(product.id)} className="text-red-500 hover:text-red-700 font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-3">
                <span>Items</span>
                <span>{cartItem.length}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>
                  $
                  {cartItem
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>

                <span className="text-blue-600">
                  $
                  {cartItem
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </span>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;