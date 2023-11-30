"use client";
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

const Home = ({ searchParams }) => {
    const [sellerData, setSellerData] = useState([]);


    useEffect(() => {
        fetch(`https://ecomproject1.onrender.com/api/sellers`)
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
        
        {searchParams.sellerId ? (
            <p>
                {
                    sellerData.map((seller) => (
                        <div>
                            {seller._id === searchParams.sellerId ? (
                                <div>
                                    <h1>{seller.item.title}</h1>
                                    <h1>{seller.item.description}</h1>
                                    <h1>{seller.item.price}</h1>
                                    <h1>{seller.seller.name}</h1>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))
                }
            </p>
        ):(
            <p>
                buy
            </p>
        )
        }
      </>
    );
  };
  
  export default Home;
  