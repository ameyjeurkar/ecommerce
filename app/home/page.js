import ProductCard from "../../components/ProductCard";

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