import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.chanel.productData);
  const userInfo = useSelector((state) => state.chanel.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  if (productData.length === 0) {
    return (
      <div>
        <img
          className="w-full h-60 object-cover"
          src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=438&q=80"
          alt="cartImg"
        />
        <div className="max-w-screen-xl mx-auto py-8 flex flex-col px-20 items-center">
          <p className="font-titleFont font-semibold text-lg text-orange-600">
            Your Cart is Empty. Please go back to Shopping and add products to
            cart.
          </p>
          <Link to="/">
            <button className="mt-3 ml-7 flex items-center gap-1 text-gray-500 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=438&q=80"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex px-20">
        <Cartitem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4 bg-slate-50" >
          <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex item-start gap-4 text-base">
              Shipping
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                delectus iure, sequi.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold ">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NBaAhSA98vpQRekWoVDChQUVX5K0D1ElN59CyUlRw7Wvg4V298Sf6Ikv8Fy6ExMrDL7qS6vT6siSEp3h5VIf70w00VbHTHk4V"
                name="Chanel Online Shopping"
                amount={totalAmt * 100}
                label="Pay to Chanel"
                description={`Your Payment amount is ${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
