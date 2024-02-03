"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct the import for useRouter
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  const [sellerData, setSellerData] = useState([]); // State to store fetched data

  useEffect(() => {
    // Make a GET request to your Express.js backend to fetch trending videos
    fetch(`https://ecomproject1.onrender.com/api/sellers`)
      .then((response) => response.json())
      .then((data) => {
        setSellerData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Re-run the effect when the region code changes

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    // Sign out the user
    await signOut("google");

    // Go back to the previous page
    router.back();
  };
  console.log(sellerData);
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <button onClick={handleLogout}>Logout</button>
        <div>
          <ul>
            {sellerData.map((seller) => (
              <li key={seller._id}>
                <p>Name: {seller.seller.name}</p>
                <p>Phone: {seller.seller.phone}</p>
                <p>Department: {seller.seller.department}</p>

                {/* Display images */}
                {seller.item.images && (
                  <div>
                    <p>Images:</p>
                    {seller.item.images.map((image, index) => (
                      <img
                        key={index}
                        src={`https://ecomproject1.onrender.com/${image}`}
                        alt={`Image ${index}`}
                      />
                    ))}
                  </div>
                )}
              </li> // Adjust to match your data structure
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
