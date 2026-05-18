"use client";
import Image from "next/image";
import { useState } from "react";

export default function Checkout() {
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);

  const products = [
    {
      id: 1,
      name: "Sony PlayStation 5 Pro",
      price: 499.99,
      img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
    {
      id: 2,
      name: "Sony PlayStation Pulse 3D Wireless Headset",
      price: 99.99,
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
  ];


  const subtotal = qty1 * products[0].price + qty2 * products[1].price;
  const tax = 10;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-black-100 p-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div>

          <h2 className="text-[coral] text-2xl font-semibold mb-6">Order Summary</h2>

          {/* PRODUCT 1 */}
          <div className="bg-[coral] rounded-xl shadow p-4 flex gap-4 mb-4">

            <img
              src={products[0]?.img}
              width={96}
              height={96}
              alt="product image"
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div className="flex flex-col justify-between flex-1">

              <div>
                <h3 className="font-semibold">
                  {products[0]?.name.toUpperCase()}
                </h3>

                <p className="text-gray-500 text-sm">
                {products[0]?.name}
                </p>
              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center border rounded">

                  <button
                    className="px-3"
                    onClick={() => qty1 > 1 && setQty1(qty1 - 1)}
                  >
                    -
                  </button>

                  <span className="px-4">{qty1}</span>

                  <button
                    className="px-3"
                    onClick={() => setQty1(qty1 + 1)}
                  >
                    +
                  </button>

                </div>

                <p className="font-semibold">
                  ${products[0].price}
                </p>

              </div>

            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="bg-[coral] rounded-xl shadow p-4 flex gap-4 mb-6">

            <img
              src={products[1].img}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div className="flex flex-col justify-between flex-1">

              <div>
                <h3 className="font-semibold">
                  {products[1].name}
                </h3>

                <p className="text-gray-500 text-sm">
                  Standard Edition • Wireless • White
                </p>
              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center border rounded">

                  <button
                    className="px-3"
                    onClick={() => qty2 > 1 && setQty2(qty2 - 1)}
                  >
                    -
                  </button>

                  <span className="px-4">{qty2}</span>

                  <button
                    className="px-3"
                    onClick={() => setQty2(qty2 + 1)}
                  >
                    +
                  </button>

                </div>

                <p className="font-semibold">
                  ${products[1].price}
                </p>

              </div>

            </div>
          </div>

          {/* PRICE SUMMARY */}

          <div className="bg-white rounded-xl shadow p-6">

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Tax</span>
              <span>${tax}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

        </div>


        {/* RIGHT SECTION */}
        <div className="bg-white rounded-xl shadow p-8">

          <h2 className="text-xl font-semibold mb-6">
            Payment Details
          </h2>

          <div className="space-y-4">

            <input
              placeholder="Email address"
              className="w-full border rounded-lg p-3"
            />

            <input
              placeholder="Card number"
              className="w-full border rounded-lg p-3"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="Expiration date"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="Security code"
                className="border rounded-lg p-3"
              />

            </div>

            <input
              placeholder="Cardholder name"
              className="w-full border rounded-lg p-3"
            />

            <input
              placeholder="Country"
              className="w-full border rounded-lg p-3"
            />

            <input
              placeholder="Address"
              className="w-full border rounded-lg p-3"
            />

          </div>

          <button
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg"
          >
            Pay ${total.toFixed(2)}
          </button>

        </div>

      </div>

    </div>
  );
}