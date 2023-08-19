import React from "react";

import Store from "../../store/Store";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Banner from "../banner/Banner";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";

type PaystackProps = {
  reference: string;
  email: string;
  amount: number;
  publicKey: any;
};

type Props = {
  modal: boolean;
  setModal: (by: boolean) => void;
};

const Cart = () => {
  const { cartArray, removeFromCart } = Store();
  const [cart, setCart] = React.useState(cartArray);

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
    tax: 3,
    shipping: 10,
    discount: 4,
    total: totalPrice,
  };

  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: "you.shop@gmail.com",
    amount:
      Math.round(
        billings.tax + billings.total + billings.shipping - billings.discount
      ) * 80000,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };

  

  const initializePayment = usePaystackPayment(config);
  const onSuccess = () => {
    toast.success("Payment successfully completed");
  };
  const onClose = () => {
    toast.error("Your order was cancelled");
  };



  React.useEffect(() => {
    setCart(cartArray);
  }, [cartArray]);

  return (
    <main className="container px-5 pt-12 mx-auto lg:px-10 lg:pt-20 font-Lato">
      {cartArray.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <h1 className="text-4xl font-bold lg:text-6xl sm:text-5xl ">
            Shopping Cart is <span className="text-orange-500">Empty</span>
          </h1>
          <p className="text-lg">
            Go to shop and add to cart product you'd like to buy.
          </p>
          <a href="/#product">
            <button className="flex items-center p-3 text-white bg-orange-500 rounded-md animate-verticalBounce">
              <BiArrowBack className="mr-2" /> Return to Shop
            </button>
          </a>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-5xl font-bold">Shopping Cart</h1>
            <p className="py-4 text-base font-medium">
              There {cartArray.length === 1 ? 'is' : 'are'} {" "}
              <span className="font-semibold ">
                {cartArray.length} {cartArray.length === 1 ? 'product' : 'products'} {" "}
              </span>
              in your cart
            </p>
          </div>

          <section className="flex flex-col justify-between py-10 lg:flex-row">
            <div className="w-full lg:w-8/12">
              <table className="w-full">
                <thead className="border-b ">
                  <tr className="flex items-center justify-between pb-2 ">
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
                      className="flex items-center justify-between py-5 border-b "
                    >
                      <td className="flex items-center justify-center w-1/4">
                        <img
                          src={item.image}
                          alt="fruit"
                          className="w-16 h-16 rounded-md lg:w-28 lg:h-28 "
                        />
                      </td>
                      <td className="flex items-center justify-center w-1/4 text-lg">
                        <span className="font-medium">$</span>
                        {item.price}
                      </td>
                      <td className="flex justify-center w-1/4">
                        <button
                          className="w-8 h-8"
                          onClick={() => handleDecrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="flex items-center px-2">{item.quantity} </span>
                        <button
                          className="w-8 h-8"
                          onClick={() => handleIncrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </td>
                      <td className="flex items-center justify-center w-1/4 text-lg">
                        <span className="font-medium">$</span>
                        {item.price * item.quantity}
                      </td>

                      <div
                        className="flex items-center justify-center w-1/4 text-lg cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RiDeleteBinLine />
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 my-8 ml-0 border rounded-md lg:w-4/12 lg:ml-4 h-fit">
              <div className="flex justify-between py-3">
                <h1 className="text-lg font-semibold">
                  Sub Total:
                </h1>
                <p className="text-lg font-medium">${billings.total}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="py-3 text-lg font-semibold">
                  Discount:
                </h1>
                <p className="text-lg font-medium">${billings.discount}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="py-3 text-lg font-semibold">
                  Shipping Fee:
                </h1>
                <p className="text-lg font-medium">${billings.shipping}.00</p>
              </div>
              <div className="flex justify-between py-3 border-b">
                <h1 className="py-3 text-lg font-semibold">
                  Estimated Tax:
                </h1>
                <p className="text-lg font-medium">${billings.tax}.50</p>
              </div>
              <div className="flex items-center justify-between py-3">
                <h1 className="py-5 text-lg font-semibold">
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
                className="w-full p-3 text-white bg-orange-500 rounded-md"
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}
      <Banner />
    </main>
  );
};

export default Cart;

