"use client";
import Modal from "./components/Modal";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import path from "path";
import { useHistory } from "react-router-dom";
import Landing from "./components/Landing";

export default function Home() {
  const [sellerData, setSellerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { session, data } = useSession();

  useEffect(() => {
    fetch(`https://ecomproject1.onrender.com/api/sellers`)
      .then((response) => response.json())
      .then((data) => {
        setSellerData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [session]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSellers = sellerData.filter((seller) =>
    seller.item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleDelete = (sellerId) => {
    // Remove the deleted item from the state
    setSellerData(sellerData.filter(seller => seller._id !== sellerId));
  };



  return (
    <div className="m-4 sm:m-10">
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Image
            src={modalImage}
            alt="Modal image"
            layout="fill"
            objectFit="cover"
          />
        </Modal>
      )}

      {data?.user ? (
        <div className="flex flex-col min-h-screen">
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
                style={{ width: "100%" }} // Add this line
              />
            </div>
          </form>
          <div className="flex-grow">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {currentItems.map((seller) => (
                <div
                  key={seller._id}
                  className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
                >
                  {data?.user?.email === seller.seller.email && (
                    <button
                      onClick={() => handleDelete(seller._id)}
                      class="absolute top-0 right-0 m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      Delete
                    </button>
                  )}
                  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <div>
                      <Image
                        key={0}
                        src={`https://ecomproject1.onrender.com/${seller.images[0]}`}
                        alt={`${seller.item.title} image`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p class="absolute bottom-0 left-0 mb-2 ml-2 px-2 py-1 font-sans text-sm antialiased font-bold text-white bg-blue-600 rounded">
                      Sold By: {seller.seller.name}
                    </p>
                  </div>
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {seller.item.title}
                    </h5>
                    <p class="inline-block px-3 py-1 font-sans text-2xl antialiased font-bold leading-relaxed text-[#25D366] ">
                      ₹{seller.item.price}/-
                    </p>
                  </div>
                  <div class="p-6 pt-0">
                    {/* <Link
                  href={{
                    pathname: `/${seller._id}`,
                    query: { sellerId: seller._id },
                  }}
                  key={seller._id}
                > */}
                    <div class="flex space-x-2">
                      <button
                        onClick={() => {
                          //shreu
                          console.log("Clicked");
                          console.log("hi");
                          openModal(
                            `https://ecomproject1.onrender.com/${seller.images[0]}`
                          );
                        }}
                        class="align-middle select-none mr-10 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        View
                      </button>
                      {/* </Link> */}
                      <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() =>
                          window.open(
                            `https://wa.me/+91${
                              seller.seller.phone
                            }?text=${escape(
                              `Hello, this is an automated message from GecEcom website. I am interested in buying the product you listed: ${seller.item.title}, priced at ${seller.item.price}. You can view the product here: ${seller.item.url}. Please respond at your earliest convenience. Thank you.`
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
              ))}
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
