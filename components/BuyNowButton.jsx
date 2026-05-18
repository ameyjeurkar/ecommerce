"use client";

import { useRouter } from "next/navigation";

export default function BuyNowButton({productID}) {
    const router = useRouter();

    const goToCheckout = () => {
        let cartItems = localStorage.getItem("cartItems") || "[]";
        if(!JSON.parse(cartItems).includes(productID)) {
            const updatedCartItems = [...JSON.parse(cartItems), productID];
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        }
        router.push("/checkout");
    }

    return (
        <button
            onClick={goToCheckout}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-medium cursor-pointer">
            BUY NOW
        </button>
    )
}
