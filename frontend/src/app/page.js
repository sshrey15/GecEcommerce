"use client";
import Modal from "./components/Modal";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import path from "path";
import { useHistory } from "react-router-dom";
import Landing from "./components/Landing";
import Loading from "./loading";

export default function Home() {
  const [sellerData, setSellerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { session, data } = useSession();
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`https://ecomproject1.onrender.com/api/sellers`)
      // fetch(`http://localhost:3001/api/sellers`)
      .then((response) => response.json())
      .then((data) => {
        setSellerData(data);

        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        setIsloading(false);
      });
  }, [session]);

  const [itemsPerPage] = useState(8);

  const filteredSellers = sellerData.filter(
    (seller) =>
      !selectedOption ||
      seller.item.title.toLowerCase() === selectedOption.toLowerCase()
  );

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
      {isLoading ? (
        <Loading numCards={4} />
      ) : data?.user ? (
        <div className="flex flex-col min-h-screen ">
          {currentPage === 1 && (
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg my-5 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All</option>
              <option value="Bomber">Bomber</option>
              <option value="Drafter">Drafter</option>
              <option value="Boiler">Boiler</option>
              <option value="Notes & Books">Notes & Books</option>
            </select>
          )}
          <div className="flex-grow">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                currentItems.map((seller) => (
                  <div
                    key={seller._id}
                    className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
                  >
                    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                      <div>
                        <Image
                          key={0}
                          src={
                            seller.item.title === "Bomber"
                              ? "/bomber.jpg"
                              : seller.item.title === "Drafter"
                              ? "/Drafter.jpeg"
                              : seller.item.title === "Boiler"
                              ? "/BoilerSuits.jpg"
                              : seller.item.title === "Notes & Books"
                              ? "/booksNotes.jpg"
                              : seller.item.title === "Stationary"
                              ? "/Stationary.jpg"
                              : "/Default.jpg"
                          }
                          alt={`${seller.item.title} image`}
                          layout="fill"
                          objectFit="cover"
                          loading="eager"
                        />
                      </div>

                      <div class="absolute bottom-0 left-0 mb-2 ml-2 px-2 py-1 font-sans text-sm antialiased font-bold text-white bg-blue-600 rounded flex items-center">
                        Sold By: {seller.seller.name}
                      </div>
                    </div>
                    <div class="p-6">
                      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {seller.item.title}
                      </h5>
                      <p class="inline-block px-3 py-1 font-sans text-2xl antialiased font-bold leading-relaxed text-[#25D366] ">
                        ₹{seller.item.price}/-
                      </p>
                      <p class="mt-2 text-gray-600">
                        {seller.item.description}
                      </p>{" "}
                      {/* New paragraph for description */}
                    </div>
                    <div class="p-6 pt-0">
                      {/* <Link
                        href={{
                          pathname: `/${seller._id}`,
                          query: { sellerId: seller._id },
                        }}
                        key={seller._id}
                      > */}
                      <div class="flex space-x-2 items-center">
                        {/* </Link> */}
                        <button
                          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-12 rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          type="button"
                          onClick={() =>
                            window.open(
                              `https://wa.me/+91${
                                seller.seller.phone
                              }?text=${escape(
                                `Hello ${seller.seller.name}, this is an automated message from GecEcom website. I am interested in buying the product you listed: ${seller.item.title}, priced at ${seller.item.price}. Please respond at your earliest convenience. Thank you.`
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
                  </div>
                ))
              )}
            </ul>
          </div>
          <div className=" mt-10">
            <nav aria-label="Page navigation example">
              <ul class="flex items-center justify-center space-x-4 border-2 border-gray-200 p-2  rounded-md">
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
          </div>
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
}
