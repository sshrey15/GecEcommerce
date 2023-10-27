"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Correct the import for useRouter
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [sellerData, setSellerData] = useState([]); // State to store fetched data


  useEffect(
    () => {
        
      // Make a GET request to your Express.js backend to fetch trending videos
      fetch(`http://localhost:3001/api/sellers`)
        .then((response) => response.json())
        .then((data) => {
          setSellerData(data);
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      
    },[]);// Re-run the effect when the region code changes
  

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('http://localhost:3001/api/sellers', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({}),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
    
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
    
//   });
//   console.log("hi");
//   });

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

    <div>
      <button onClick={handleLogout}>Logout</button>
      <div>

        



          <ul>
            {sellerData.map((seller) => (
              <li key={seller._id}>
                <p>Name: {seller.seller.name}</p>
            <p>Phone: {seller.seller.phone}</p>
            <p>Department: {seller.seller.department}</p>
              </li> // Adjust to match your data structure
            ))}
          </ul>
        
      </div>
    </div>
  );
};

export default Home;
