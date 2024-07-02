"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";


import Landing from "../components/Landing";

function page() {

  
  const router = useRouter();
  const {session} = useSession();
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const [sellerInfo, setSellerInfo] = useState({
    name: data?.user?.name,
    phone: "",
    department: "",
    yearOfStudy: "",
  });



  const [itemInfo, setItemInfo] = useState({
    title: "Boiler",
    description: "" ,
    price: "",
  });

  const Push = () =>{
    

    useEffect(() => {
      router.push("/");
    }, []);
  }



  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    if (name === "yearOfStudy") {
      // Ensure the value is within the range 1-4
      const intValue = parseInt(value, 10);
      if (intValue >= 1 && intValue <= 4) {
        setSellerInfo({ ...sellerInfo, [name]: value });
      }
    } else if (name === "phone") {
      // Remove any non-digit characters from the phone number
      const newValue = value.replace(/\D/g, "");
      // Ensure the phone number does not contain more than 10 digits
      if (newValue.length <= 10) {
        setSellerInfo({ ...sellerInfo, [name]: newValue });
      }
    } else {
      setSellerInfo({ ...sellerInfo, [name]: value });
    }
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemInfo({ ...itemInfo, [name]: value });
  };



  // ...

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      seller: sellerInfo,
      item: itemInfo,
    };
    fetch("https://ecomproject1.onrender.com/api/sellers",{
    // fetch("http://localhost:3001/api/sellers", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then(async (data) => { // Make this function async
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Item successfully listed!");
        setIsLoading(false);
        router.push("/"); // Go back to the previous page
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>{
        isLoading ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <svg
              className="animate-spin -ml-1 mr-3 h-20 w-20 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            <p className="text-2xl font-bold">Loading...</p>
          </div>

        ) : 
        data?.user? (
          <div className="p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Seller Information</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Seller Information */}
            <div className="mb-4">
              <label htmlFor="name" className="block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={sellerInfo.name}
                readOnly
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4 flex space-x-1">
              <label htmlFor="phone" className="block">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={sellerInfo.phone}
                onChange={handleSellerChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
        
            </div>
    
            <div className="mb-4">
              <label htmlFor="department" className="block">
                Department:
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={sellerInfo.department}
                onChange={handleSellerChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="yearOfStudy" className="block">
                Year of Study:
              </label>
              <input
                type="number"
                id="yearOfStudy"
                name="yearOfStudy"
                value={sellerInfo.yearOfStudy}
                onChange={handleSellerChange}
                className="w-full px-3 py-2 border rounded"
                required
                min="1"
                max="4"
              />
            </div>
    
            <h2 className="text-2xl font-bold mb-4">Item Information</h2>
    
            <div className="mb-4">
              <label htmlFor="title" className="block">
                Title:
              </label>
              <select
                id="title"
                name="title"
                value={itemInfo.title}
                onChange={handleItemChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="Boiler">Boiler</option>
                <option value="Drafter">Drafter</option>
                <option value="Bomber">Bomber</option>
                <option value="Engineering Graphics Material">Engineering Graphics Material</option>
                <option value="Notes & Books">Notes & Books</option>
              </select>
            </div>
    
            <div className="mb-4">
              <label htmlFor="description" className="block">
                Description: 
              </label>
              <textarea
                id="description"
                name="description"
                value={itemInfo.description}
                onChange={handleItemChange}
                placeholder="Provide information about the product"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="price" className="block">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={itemInfo.price}
                onChange={handleItemChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            {/* <div className="mb-4">
              <label htmlFor="images" className="block">
                Images:
              </label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/png ,image/jpeg,image/jpg"
                multiple // Allow multiple file selection
                onChange={handleImageChange}
              />
            </div> */}
    
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
    
        ) : (
          <>
          <Push/>
          <Landing/>
          </>
          
        )
    }
      

    

   
    </div>
  );
}

export default page;
