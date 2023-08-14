import { ProductItem } from "../../components/products/Products";
import { RiStarSFill } from "react-icons/ri";

const ProductCard = ({ products }: { products: ProductItem[] }) => {

  return (
    <>
      {products.map((product: ProductItem) => (
        <div className="rounded-lg shadow-md max-w-full lg:max-w-[350px] p-5 font-Lato">
          <img src={product.image} alt="product" className="w-56 h-56" />
          <div className="space-y-2 pt-2">
            <p className="text-gray-600 font-light">
              Category: {product.category}
            </p>
            <h3 className="text-2xl text-secondary first-letter:uppercase font-semibold">
              {product.title}
            </h3>
            <div className="flex space-x-2 text-xl text-yellow-400">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill className="text-black" />
              <RiStarSFill className="text-black" />
            </div>
            <p className="font-light">Price</p>
            <div className=" flex text-lg justify-between items-center">
              <p className="font-medium text-lg">
                <span className="font-semibold">$</span>
                {product.price}.00{" "}
              </p>
              <button className="my-5 flex items-center p-2 rounded-md justify-center">Add to Cart</button>

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;