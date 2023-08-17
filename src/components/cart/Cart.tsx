import Store from "../../store/Store";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import React from "react";


const Cart = () => {
  const { cartArray, removeFromCart } = Store();
  const [cart, setCart] = React.useState(cartArray)

  const handleDecrementQuantity = (itemId: number) => {
    setCart((prevCart: any) =>
      prevCart.map((item: any) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrementQuantity = (itemId: number) => {
    setCart((prevCart: any) =>
      prevCart.map((item: any) => {
        console.log(item.id);
        return item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  };

  const totalPrice = cart.reduce(
    (acc: number, curr) => acc + Number(curr.price * curr.quantity),
    0
  );

  const billings = {
    tax: 3.5,
    shipping: 10,
    discount: 5.0,
    total: totalPrice,
  };


  React.useEffect(() => {
    setCart(cartArray);
  }, [cartArray]);

  return (
    <main className="mx-auto container px-5 lg:px-10 pt-12 lg:pt-20 font-Lato">
      {cartArray.length === 0 ? (
        <div className="flex items-center flex-col text-center justify-center space-y-5">
          <h1 className="lg:text-6xl text-4xl sm:text-5xl font-bold ">
            Shopping Cart is <span className="text-orange-500">Empty</span>
          </h1>
          <p className="text-lg">
            Go to shop and add to cart product you'd like to buy.
          </p>
          <a href="/#product">
            <button className="animate-verticalBounce flex items-center p-3 bg-orange-500 text-white rounded-md">
              <BiArrowBack className="mr-2" /> Return to Shop
            </button>
          </a>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-5xl font-bold">Shopping Cart</h1>
            <p className="py-4 font-medium text-base">
              There {cartArray.length === 1 ? 'is' : 'are'} {" "}
              <span className="font-semibold ">
                {cartArray.length} {cartArray.length === 1 ? 'product' : 'products'} {" "}
              </span>
              in your cart
            </p>
          </div>

          <section className="flex lg:flex-row flex-col justify-between py-10">
            <div className="lg:w-8/12 w-full">
              <table className="w-full">
                <thead className=" border-b">
                  <tr className=" pb-2 flex justify-between items-center">
                    <th className="w-1/4">Product</th>
                    <th className="w-1/4">Price</th>
                    <th className="w-1/4">Quantity</th>
                    <th className="w-1/4">Total</th>
                    <th className="w-1/4"></th>
                  </tr>
                </thead>
                <tbody className="">
                  {cart.map((item) => (
                    <tr
                      key={item.id}
                      className=" border-b flex justify-between items-center py-5"
                    >
                      <td className="w-1/4 items-center justify-center   flex">
                        <img
                          src={item.image}
                          alt="fruit"
                          className="lg:w-28 lg:h-28 w-16 h-16 rounded-md "
                        />
                      </td>
                      <td className="w-1/4 justify-center items-center text-lg flex">
                        <span className="font-medium">$</span>
                        {item.price}
                      </td>
                      <td className="w-1/4 justify-center flex">
                        <button
                          className="h-8 w-8"
                          onClick={() => handleDecrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="px-2 flex items-center">{item.quantity} </span>
                        <button
                          className="h-8 w-8"
                          onClick={() => handleIncrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </td>
                      <td className="w-1/4 justify-center items-center text-lg flex">
                        <span className="font-medium">$</span>
                        {item.price * item.quantity}
                      </td>

                      <div
                        className="w-1/4 cursor-pointer justify-center items-center text-lg flex"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RiDeleteBinLine />
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:w-4/12 border ml-0 lg:ml-4 my-8 rounded-md h-fit p-5">
              <div className="flex justify-between py-3">
                <h1 className="text-lg  font-semibold">
                  Sub Total:
                </h1>
                <p className="text-lg font-medium">${billings.total}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="text-lg  py-3 font-semibold">
                  Discount:
                </h1>
                <p className="text-lg font-medium">${billings.discount}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="text-lg  py-3 font-semibold">
                  Shipping Fee:
                </h1>
                <p className="text-lg font-medium">${billings.shipping}.00</p>
              </div>
              <div className="flex justify-between border-b py-3">
                <h1 className="text-lg  py-3 font-semibold">
                  Estimated Tax:
                </h1>
                <p className="text-lg font-medium">${billings.tax}.00</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h1 className="text-lg  py-5 font-semibold">
                  Total:
                </h1>
                <p className="text-lg font-medium">
                  $
                  {Math.round(
                    billings.total +
                      billings.tax +
                      billings.shipping -
                      billings.discount
                  )}
                  .00
                </p>
              </div>
              <button
                className="p-3 w-full bg-orange-500 rounded-md text-white"
                onClick={() => {
                  alert('success');
                }}
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;