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
  });

  const [images, setImages] = useState([]);

  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    if (name === 'yearOfStudy') {
      // Ensure the value is within the range 1-4
      const intValue = parseInt(value, 10);
      if (intValue >= 1 && intValue <= 4) {
        setSellerInfo({ ...sellerInfo, [name]: value });
      }
    } else if (name === 'phone') {
      // Remove any non-digit characters from the phone number
      const newValue = value.replace(/\D/g, '');
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

  


  const handleImageChange = (e) => {
    console.log(e.target.files);
    setImages(Array.from(e.target.files));
  };


  // ...
  
  const handleSubmit =  (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    formData.append('seller', JSON.stringify(sellerInfo));
    formData.append('item', JSON.stringify(itemInfo));
    
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
  
    fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      console.log('Response:', response);
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("Item successfully listed!");
      router.push('/'); // Go back to the previous page
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  
  

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

        


<button  type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        
        >
          Submit
        </button>


      </form>
    </div>
  );
}

export default page;