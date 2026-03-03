import Image from "next/image";
import Link from "next/link";

const getProductDetails = async (productID) => {
    const response = await fetch(`${process.env.NEXT_API_URL}/api/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            productID: productID
        })
    })
    const data = await response.json();

    return data;
}

const ProductDetail = async ({ params }) => {
    const { productID } = await params;
    const productDetails = await getProductDetails(productID);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT SIDE IMAGES */}
                <div>
                    <div className="border rounded-lg p-6 bg-black-700">
                        <Image src={productDetails?.images[0]} width={400} height={400} alt={productDetails?.description} className="w-full object-contain"/>
                    </div>

                    <div className="flex gap-3 mt-4">
                        {
                            productDetails?.images?.map(imageURL => {
                                return (
                                    <Image width={60} height={60} alt="thumbnail image" key={imageURL} className="w-20 h-20 border rounded-lg p-2 cursor-pointer" src={imageURL} />
                                )
                            })
                        }
                    </div>
                </div>

            
                {/* RIGHT SIDE PRODUCT DETAILS */}
                <div>
                <h1 className="text-3xl font-semibold text-white-900">
                    {productDetails?.title}
                </h1>


                {/* RATING COMPONENT */}
                <div className="flex items-center">
                    <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                    <p className="ms-2 text-sm font-bold text-heading">{productDetails?.rating}</p>
                    <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
                    <Link href="#" className="text-sm font-medium text-heading underline hover:no-underline">{productDetails?.reviews?.length} reviews</Link>
                </div>


                
                <p className="text-white-100 mt-2">
                    {productDetails?.description}
                </p>

                
                {
                    productDetails?.tags.map(tag => {
                        return (
                            <span className="inline-flex items-center text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mt-2 mr-2">
                                {tag}
                            </span>
                        )
                    })
                }

                <br />
                <hr className="my-4" />
                <br />

                
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-yellow-400">${productDetails?.price}</span>
                    <span className="text-gray-400 line-through">$768.90</span>
                </div>

                {/* AVAILABILITY COMPONENT */}
                {
                    productDetails?.availabilityStatus.toUpperCase().replaceAll(" ", "_") === "IN_STOCK" ? (
                        <span className="text-sm text-white-400 bg-green-700 px-2 py-1 rounded mt-2 inline-block">
                            {productDetails?.availabilityStatus}
                        </span>
                    ) : (
                        <span className="text-sm text-white-700 bg-red-600 px-2 py-1 rounded mt-2 inline-block">
                            {productDetails?.availabilityStatus}
                        </span>
                    )
                }

                
                {/* BUY BUTTONS */}
                <div className="flex items-center gap-3 mt-6">
                    <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-medium cursor-pointer">
                        BUY NOW
                    </button>
                    <button className="flex-1 bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg font-medium cursor-pointer">
                        ADD TO CART
                    </button>

                    <button className="border border-white-500 text-white-500 p-3 rounded-lg">
                    ❤
                    </button>
                </div>

                <br />
                <hr className="my-6" />
                <br />

                
                <p className="font-semibold fs-[2rem] mb-4">
                    {productDetails?.title}: Characteristics
                </p>

                <div className="flex justify-between text-gray-300 text-sm mb-6">
                    <span className="hover:text-yellow-500">Compare</span>
                    <span className="hover:text-yellow-500">Ask a question</span>
                    <span className="hover:text-yellow-500">Delivery & Return</span>
                    <span className="hover:text-yellow-500">Share</span>
                </div>

                
                <div className="border rounded-lg px-4 flex items-center py-3 mb-4">
                    <svg
                        className="w-10 h-10 text-yellow-500 mr-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 17H6a2 2 0 01-2-2V7a2 2 0 012-2h7v10m0 0h5l2-3V9h-7m0 8a2 2 0 104 0 2 2 0 10-4 0zm-8 0a2 2 0 104 0 2 2 0 10-4 0z" />
                    </svg>
                    <div>
                        <p className="font-semibold text-white">Free Delivery</p>
                        <p className="text-sm text-gray-500">
                            {productDetails?.shippingInformation}
                        </p>
                    </div>
                    </div>

                <div className="border rounded-lg flex px-4 py-3 items-center">
                    <svg
                        className="w-10 h-10 text-yellow-500 mr-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 10h11a4 4 0 110 8h-1m-10-8l4-4m-4 4l4 4" />
                    </svg>
                    <div>
                        <p className="font-semibold text-white">Return Delivery</p>
                        <p className="text-sm text-gray-500">

                            {productDetails?.returnPolicy}
                        </p>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
}
export default ProductDetail;