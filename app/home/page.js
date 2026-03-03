import ProductCard from "../../components/ProductCard";

const Home = async () => {
    const products = await getProducts();

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