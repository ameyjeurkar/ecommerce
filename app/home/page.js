import ProductCard from "../../components/ProductCard";

const getProducts = async () => {
    // server component needs process.env.NEXT_API_URL to fetch data from the API route we created in app/api/products/route.js
    // Same is not case with CLIENT COMPONENTT as it can directly fetch data from the API route without using process.env.NEXT_API_URL
    const response = await fetch(`${process.env.NEXT_API_URL}/products`);
    const data = await response.json();
  
    return data;
}

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