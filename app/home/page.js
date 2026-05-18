import ProductCard from "../../components/ProductCard";

// export const revalidate = 60;               // forces ISR
// export const dynamic = "force-static";      // forces SSG
// export const dynamic = "force-dynamic";     // forces SSR

const Home = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();

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
export default Home;