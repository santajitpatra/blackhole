import React from "react";
import { Header, Order, Footer } from "@/components";
import { useSession } from "next-auth/react";
import moment from "moment";
import db from "@/firebase";

const Orders = () => {
//   const { session } = useSession();
  return (
    <div>
      <Header />

      {/* <main className="max-w-screen-lg mx-auto p-10">
        <h2 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h2>

        {session ? (
          <h3>x Orders</h3>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
            {orders?.map(
({ id, amount, amountShipping, items, timestamp, images }
) => (
<Order

key={id}
id={id}
amount={amount}
amountShipping={amountShipping}
items={items}
timestamp={timestamp}
images={images}
/>)
            )}
        </div>
      </main> */}
      <Footer />
    </div>
  );
};

export default Orders;

// export async function getServerSideProps(context) {
//   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//   // Get the users logged in credentials...

//   const session = await getSession(context);

//   if (!session) {
//     return {
//       props: {},
//     };
//   }

//   // Firebase db

//   const stripeOrders = await db
//     .collection("users")
//     .doc(session.user.email)
//     .collection("orders")
//     .orderBy("timestamp", "desc")
//     .get();

//   // Stripe orders

//   const orders = await Promise.all(
//     stripeorders.docs.map(async (order) => ({
//       id: order.id,
//       amount: order.data().amount,
//       amountShipping: order.data().amount_shipping,
//       images: order.data().images,
//       timestamp: moment(order.data().timestamp.toDate()).unix(),
//       items: (
//         await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
//       ).data,
//     }))
//   );

//   return{
//     props: {
//         orders,
//     }
//   }
// }
