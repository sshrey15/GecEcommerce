"use client"
import React, { useState } from 'react';

function page() {
  const [sellerInfo, setSellerInfo] = useState({
    name: '',
    phone: '',
    department: '',
    yearOfStudy: '',
  });

  const [itemInfo, setItemInfo] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    setSellerInfo({ ...sellerInfo, [name]: value });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemInfo({ ...itemInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log('Seller Info:', sellerInfo);
    console.log('Item Info:', itemInfo);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Seller Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Seller Information */}
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={sellerInfo.name}
            onChange={handleSellerChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
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

        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
