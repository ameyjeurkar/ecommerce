import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

const ProductCard = ({ product }) => {

    const ratingColorScheme = (rating) => {
        if(rating >= 4) {
            return "bg-green-800 text-green-100";
        } else if (rating >= 3) {
            return "bg-yellow-800 text-yellow-100";
        } else {
            return "bg-red-800 text-red-100";
        }
    }

    return (
        <div className="relative w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
            <a href="#">
                <Image src={product?.images[0]} width={400} height={400} alt={product?.description} />
                <span className={`absolute top-[1rem] right-[1rem] bg-brand-softer text-fg-brand-strong text-xl font-extrabold px-1.5 py-0.5 rounded-sm ${ratingColorScheme(product?.rating)}`}>{product?.rating}</span>
            </a>
            <div>
                <Link href={`/home/${product.id}`}>
                    <h5 className="text-xl text-heading font-semibold tracking-tight">{product.title}</h5>
                </Link>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-extrabold text-heading">${product.price}</span>
                    <AddToCartButton />
                </div>
            </div>
        </div>
    )
}
export default ProductCard;