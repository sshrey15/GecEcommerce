"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [sellerData, setSellerData] = useState([]); // <-- Add this line
  const { session, data } = useSession();

  useEffect(() => {
    fetch(`http://localhost:3001/api/sellers`)
      .then((response) => response.json())
      .then((data) => {
        setSellerData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div >
        <Navbar />
      </div>
      <div>
        {data?.user ? (
          <>
            <ul    className="flex ">
              {sellerData.map((seller) => (
                <div className="m-10   flex drop-shadow-lg">
                  <li key={seller._id}>
                    <p>Seller Name: {seller.seller.name}</p>
                    <p>Phone: {seller.seller.phone}</p>
                    <p>Department: {seller.seller.department}</p>
                    <p>Item: {seller.item.title}</p>
                    <p>Price: {seller.item.price}</p>
                  </li>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1>Please sign in</h1>
          </>
        )}
      </div>
    </>
  );
}
