"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import path from "path";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [sellerData, setSellerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSellers = sellerData.filter((seller) =>
    seller.item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSellers.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredSellers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
        className={currentPage === number ? "active" : ""}
      >
        {number}
      </li>
    );
  });

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  return (
    <div className="m-4 sm:m-10">
      <form
        className="
            max-w-md mx-auto mt-4 mb-10
"
      >
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={handleSearch}
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {data?.user ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((seller) => (
            <div
              key={seller._id}
              className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96"
            >
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <Image
                  key={0}
                  src={`http://localhost:3001/${seller.images[0]}`}
                  alt={`${seller.item.title} image`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div class="p-6">
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
              <div class="p-6 pt-0">
                <Link
                  href={{
                    pathname: `/${seller._id}`,
                    query: { sellerId: seller._id },
                  }}
                  key={seller._id}
                >
                  <button
                    class="align-middle select-none mr-10 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Book
                  </button>
                </Link>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${
                        seller.seller.phone
                      }?text=${encodeURIComponent(
                        "I want to buy the product you listed"
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <FaWhatsapp className="inline-block mr-2" size={24} />
                  Contact Seller
                </button>
              </div>
            </div>
          ))}

          <nav aria-label="Page navigation example" class=" m-10">
            <ul class="flex items-center justify-center space-x-4 border-2 border-gray-200 p-2 rounded-md">
              <li>
                <a
                  href="#"
                  onClick={handlePrevious}
                  class="flex items-center justify-center px-4 py-2 bg-white text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-4 h-4 transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
              </li>
              {renderPageNumbers}
              <li>
                <a
                  href="#"
                  onClick={handleNext}
                  class="flex items-center justify-center px-4 py-2 bg-white text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </ul>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
}
