import React from "react";
import { Header, Footer } from "@/components";
import Image from "next/image";
import { selectItems, selectTotal } from "@/redux/slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

import axios from "axios";

// const stripePromise = loadStripe(process.env.stripe_public_key);

function checkout  ()  {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  // const createCheckoutSession = async () => {
    // const stripe = await stripePromise;

    // const checkoutSession = await axios.post("/api/create-checkout-session", {
    //   items: items,
    //   email: session.user.email,
    // });

    // const result = await stripe.redirectToCheckout({ sessionId: checkoutSession.data.id,
    // });

    // if (result.error) alert(result.error.message);
  // };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="/show.png"
            alt="Picture of the author"
            // width={1020}
            // height={250}
            // objectFit="contain"
            // priority
          />
          <div className="flex flex-col p-5 space-y-5 bg-white">
            <h2 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Blackhole basket is empty."
                : "Your Blackhole basket"}
            </h2>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                prime={item.prime}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button
                role="link"
                // onClick={createCheckoutSession}
                disabled={!session}
                className={`btn mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 curser-not-allowed"
                }`}
              >
                {!session ? "sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default checkout;
