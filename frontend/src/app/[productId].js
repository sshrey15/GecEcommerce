"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:3001/api/sellers/${productId}`)
        .then((response) => response.json())
        // .then((data) => {
        //   // Transform the image paths before setting the product data in state
        //   const transformedProduct = {
        //     ...data,
        //     item: {
        //       ...data.item,
        //       images: data.item.images.map((path) => path.replace(/\\/g, '/')),
        //     },
        //   };
        //   setProduct(transformedProduct);
        // })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [productId]);


  
  return (
    <>
      {product ? (
        <div key={product._id}>
          <img src={`http://localhost:3001/${product.item.images[0]}`} alt="Product" />
          <h1>{product.item.title}</h1>
          <p>{product.item.description}</p>
          <p>Price: ₹{product.item.price}/-</p>
          <p>Sold By: {product.seller.name}</p>
          {/* Display other product details here */}
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </>
  );
};

export default ProductDetail;
