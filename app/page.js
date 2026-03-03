import ProductCard from "../components/ProductCard";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    console.log("PRODUCTS: ", products?.products)

    return (
        <div className="products-wrapper">
            {
                products?.products?.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}
