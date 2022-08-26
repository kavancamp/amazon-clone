import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {  
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
   //for each doc return object desc by creation
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders( 
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>
        Your Orders <small>({orders.length} orders)</small>
      </h1>
      {!user && <h2>Please sign in to see your orders</h2>}
      {user && orders.length === 0 && (
        <h2>You currently have no orders placed</h2>
      )}

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;