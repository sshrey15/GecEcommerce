"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {  useHistory } from 'react-router-dom';



export default function Home() {
  const [sellerData, setSellerData] = useState([]);
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
      {/* <div>
        <Navbar />
      </div> */}
      <div className="m-10">
        {data?.user ? (
          <>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sellerData.map((seller) => (
                <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                }}
                  key={seller._id}
                  className="flex flex-col items-center justify-center w-full h-full p-4 space-y-4 bg-pink-100 rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4 md:p-6 md:shadow-none transition-transform hover:scale-105 hover:shadow-xl hover:bg-gray-200"
                >
                  <div class="p-6">

                      {/* <Image
                        src={seller.item.images[0]}
                        alt={seller.item.title}
                        width={200}
                        height={200}
                      /> */}
                      {/* {/* <Image 
                      src={seller.item.images[0]}
                      alt={seller.item.title}
                      width={200}
                      height={200}
                      /> */}
                    
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {seller.item.title}
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      {seller.item.description}
                    </p>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    ₹{seller.item.price}/-
                    </p>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    Sold By:{seller.seller.name}
                    </p>


                  
                  </div>
                  <div class="p-6 pt-10"
                  >
                  <Link href={{
                    pathname: `/${seller._id}`,
                    query: { sellerId: seller._id },
                  }}
                   key={seller._id}>
                   
                      <button
                        class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                        
                      >
                        Book
                      </button>
                   
                  </Link>
                 
                  </div>
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
