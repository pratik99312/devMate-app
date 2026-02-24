import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState();

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  
  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true },
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits.
      currency: currency,
      name: "DevMate",
      description: "Connect to other developers",
      order_id: orderId,
      // callback_url: "http://localhost:3000/payment-success", // Your success URL
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#1E3A8A", // deep sky dark blue (very clean)
      },

      handler: verifyPremiumUser,
    };

    // it should open the Razorpay DialogBox

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return isUserPremium ? (
    "You are already a premium user"
  ) : (
    <div className="m-10">
      <div className="flex w-full flex-col lg:flex-row gap-6">
        <div className="card bg-base-300 rounded-box grow p-6 flex flex-col items-center text-center gap-3">
          <h1 className="font-bold text-3xl">Silver Membership</h1>

          <ul className="text-left">
            <li>- Chat with other people</li>
            <li>- 100 connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 3 months</li>
          </ul>

          <button
            className="btn btn-secondary mt-3"
            onClick={() => handleBuyClick("silver")}
          >
            Buy Silver
          </button>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        <div className="card bg-base-300 rounded-box grow p-6 flex flex-col items-center text-center gap-3">
          <h1 className="font-bold text-3xl">Gold Membership</h1>

          <ul className="text-left">
            <li>- Chat with other people</li>
            <li>- Infinite connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 6 months</li>
          </ul>

          <button
            className="btn btn-primary mt-3"
            onClick={() => handleBuyClick("gold")}
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
