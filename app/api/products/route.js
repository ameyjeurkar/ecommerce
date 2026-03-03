import { NextResponse } from "next/server"

export const GET = async () =>  {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    return NextResponse.json(products);
}

export const POST = async (request) => {
    const { productID } = await request.json();
    const response = await fetch(`https://dummyjson.com/products/${productID}`)
    const productDetails = await response.json();

    return NextResponse.json(productDetails);
}