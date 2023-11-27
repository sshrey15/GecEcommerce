"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

function page() {
  const router = useRouter();
  const {data} = useSession();
  const [sellerInfo, setSellerInfo] = useState({
    name: data?.user?.name,
    phone: '',
    department: '',
    yearOfStudy: '',
  });

  const [itemInfo, setItemInfo] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    if (name === 'yearOfStudy') {
      // Ensure the value is within the range 1-4
      const intValue = parseInt(value, 10);
      if (intValue >= 1 && intValue <= 4) {
        setSellerInfo({ ...sellerInfo, [name]: value });
      }
    } else {
      setSellerInfo({ ...sellerInfo, [name]: value });
    }
  };
  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemInfo({ ...itemInfo, [name]: value });
  };

  
  // const handleImageChange = (e) => {
  //   // Get the selected image files
  //   const imageFiles = Array.from(e.target.files);
    
  //   // Update the state to store the array of image files
  //   setItemInfo({ ...itemInfo, images: imageFiles });
  // };

  const handleImageChange = (e) => {
    // Get the selected image files
    const imageFiles = Array.from(e.target.files);
  
    // Update the state to store the array of image files
    setItemInfo({ ...itemInfo, images: imageFiles });
  
    // Also update the FormData to include the images
    const formData = new FormData();
    formData.append('images', imageFiles);
  
    // Now you can use formData to send the files along with other data in your fetch request
  };
  


  // ...
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from being submitted via a normal HTTP POST
  
    fetch("http://localhost:3001/api/sellers", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify({
        seller: sellerInfo,
        item: itemInfo,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Item successfully listed!");
        // After successful submission, navigate back to the previous page
        router.back(); // Assumes you have imported and are using the router from Next.js
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  // const handlesendOtp = (e) => {
  //   fetch("http://localhost:3001/api/sellers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       seller: sellerInfo.phone,
    
  //     }),})
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Success:", data);
  //       alert("OTP sent successfully!");
  //       // After successful submission, navigate back to the previous page
  //       router.back(); // Assumes you have imported and are using the router from Next.js
  //     })

  // }
  // ...
  
  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Seller Information</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Seller Information */}
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
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
          <label htmlFor="phone" className="block">Phone Number:</label>
          <input
           

            type="tel"
            id="phone"
            name="phone"
            value={sellerInfo.phone}
            onChange={handleSellerChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          {/* <button className='
          bg-blue-500 
          hover:bg-blue-700
          text-white
          font-bold
          rounded-lg

          '  onSubmit={handlesendOtp}>Send OTP</button> */}
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block">Department:</label>
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
          <label htmlFor="yearOfStudy" className="block">Year of Study:</label>
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

        {/* Item Information */}
        <h2 className="text-2xl font-bold mb-4">Item Information</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={itemInfo.title}
            onChange={handleItemChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block">Description:</label>
          <textarea
            id="description"
            name="description"
            value={itemInfo.description}
            onChange={handleItemChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block">Price:</label>
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

        <div className="mb-4">
  <label htmlFor="images" className="block">Images:</label>
  <input
    type="file"
    id="images"
    name="images"
    accept="image/png ,image/jpeg,image/jpg"
    multiple // Allow multiple file selection
    onChange={handleImageChange}
  />
</div>

        <div className="mb-4">
  {/* <label htmlFor="images" className="block">Images:</label> */}
  {/* <input
    type="file"
    id="images"
    name="images"
    accept="image/*"
    multiple // Allow multiple file selection
    onChange={handleImageChange}
  /> */}
</div>


<button  type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        
        >
          Submit
        </button>


      </form>
    </div>
  );
}

export default page;
