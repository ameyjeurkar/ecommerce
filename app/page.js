import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_API_URL}/products`); // server component needs process.env.NEXT_API_URL to fetch data from the API route we created in app/api/products/route.js
  const data = await response.json();

  return data;
} 

export default async function Home() {
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
