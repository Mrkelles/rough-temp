"use client";

import Image from "next/image";


const CartModal = () => {
    const cartItems = true

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[white] top-12 right-0 flex flex-col gap-6 z-20">
        {!cartItems ? (
            <div>Cart is Empty</div>
        ):(
            <>
            <div className="flex flex-col gap-8">
                {/* ITEM */}
            <div className="flex gap-4">
                <Image src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={72} height={36}
                className="object-cover rounded-md" 
                />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                    <div>
                        {/* TITLE */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product Name</h3>
                            <div bg-gray-50 rounded-sm>$57</div>
                        </div>
                        {/* DESC */}
                        <div className="text-sm text-gray-500">
                            available
                        </div>
                    </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-[#ea4339] cursor-pointer">Remove</span>
                </div>
              </div>
            </div>

                {/* ITEM */}
            <div className="flex gap-4">
                <Image src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={72} height={36}
                className="object-cover rounded-md" 
                />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                    <div>
                        {/* TITLE */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product Name</h3>
                            <div bg-gray-50 rounded-sm>$57</div>
                        </div>
                        {/* DESC */}
                        <div className="text-sm text-gray-500">
                            available
                        </div>
                    </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-[#ea4339] cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
        </div>

        {/* BOTTOM */}
        <div>
            <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$125</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-[black] text-[white] disabled:cursor-not-allowed disabled:opacity-75"
                //disabled={isLoading}
                //onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default CartModal