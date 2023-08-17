import { ProductItem } from "../../components/products/Products";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Store from "../../store/Store";

const ProductCard = ({ products }: { products: ProductItem[] }) => {
    const {cartArray, addToCart, removeFromCart} = Store();
    const handleAddToCart = (cart: ProductItem) => {
        const itemExist = cartArray.find((item) => item.id === cart.id);
        if (!itemExist) {
          addToCart(cart);
        }
      };

  return (
    <>
      {products.map((product: ProductItem) => (
        <div className="rounded-lg shadow-md max-w-full lg:max-w-[350px]  font-Lato">
          <img src={product.image} alt="product" className="w-full rounded-lg h-60" />
          <div className="space-y-2 pt-2 p-4">
            <p className="text-gray-600 font-light">
              Category: {product.category}
            </p>
            <h3 className="text-2xl first-letter:uppercase font-semibold h-20">
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
              {!cartArray.find((item) => item.id === product.id) ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="my-1 flex items-center p-2 rounded-md justify-center"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Add
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="my-1 flex items-center p-2 rounded-md justify-center"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Remove
                </button>
              )}

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;