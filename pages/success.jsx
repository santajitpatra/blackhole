import React from "react";
import { Header, Footer } from "@/components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";

const Success = () => {
  // const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      {/* <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />

            <h2 className="text-3x1">
              Thank you, your order has been confirmed!
            </h2>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation o
            item has shipped, if you would like to check the status of order(s)
            please press the link below.
          </p>
          <button onClick={() => router.push("/orders")} className="btn mt-8">
            Go to order
          </button>
        </div>
      </main>
      <Footer /> */}
    </div>
  );
};

export default Success;
