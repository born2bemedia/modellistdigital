"use client";
import { getOrdersByUser } from "@/app/api/getOrders";
import Products from "@/app/services/(inner_services)/3d-modeling/_components/Products";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const { currentUser, refreshToken } = useAuth();
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async (isRetry = false) => {
      setLoading(true);
      setError(null);

      try {
        const userId = currentUser.id;
        const jwt = localStorage.getItem("jwt");

        const ordersData = await getOrdersByUser(currentUser.email, jwt);
        setOrders(ordersData);
      } catch (error) {
        console.error("Failed to fetch orders:", error);

        if (!isRetry) {
          await refreshToken();
          fetchOrders(true);
        } else {
          // If this was the retry attempt, set the error
          setError("Failed to load orders.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();

    console.log(orders);

  }, [currentUser, retry]);

  return (
    <div className="personal-data">
      <h2>Track your order history</h2>
      <p>
        Below is a detailed record of all your past orders, both successful and
        failed.
        <br />
        You can track the status, view details, and download invoices for each
        order.
      </p>

      {loading && <p className="loading">Loading orders...</p>}
      {error && <p className="error">{error}</p>}
      {orders && (
        <div className="orders-wrap">
          <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Date</th>

                <th>Price</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.number}</td>
                  <td>{order.status}</td>
                  <td>
                    {new Date(order.date_created.date).toLocaleDateString()}
                  </td>

                  <td>${order.total}</td>
                  <td>
                    {order.status == "completed" &&
                      order.line_items.map(
                        (item) =>
                          item.downloads[0] && (
                            <Link
                              href={item.downloads[0].download_url}
                              target="_blank"
                              key={item.id}
                            >
                              {item.downloads[0].name}
                            </Link>
                          )
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
