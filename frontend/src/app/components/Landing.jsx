import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
const teamMembers = [
    { name: 'Member 1', image: '/path/to/image1.jpg' },
    { name: 'Member 2', image: '/path/to/image2.jpg' },
    // Add more team members as needed
]

const Landing = () => {
    return (
        <>



            <main>
                <section class="bg-white">
                    <div class="container mx-auto px-6 py-16 text-center">
                        <div class="mx-auto w-1/2" >
                            <h1 class="text-2xl w-full font-bold text-gray-800 lg:text-4xl">College Essentials, One Click Away!</h1>


                        </div>
                        <div class="mx-auto w-3/4" >
                            <p class="mt-6 text-gray-500">Revolutionizing academic material access! Buy and sell engineering essentials with a simple click  no intermediaries, no commissions.</p>
                        </div>
                        <div className='h-1/2'>
  <Carousel className='h-50' autoPlay infiniteLoop>
    <div className='flex items-center justify-center'>
      <img className='h-20 object-cover' src="boilers.png" alt="Image description" />
    </div>
    <div className='flex items-center justify-center'>
      <img className='h-20 object-cover' src="egMaterial.png" alt="Image description" />
    </div>
    <div className='flex items-center justify-center'>
      <img className='h-20 object-cover' src="bomber.jpg" alt="Image description" />
    </div>
  </Carousel>
</div>

                    </div>
                </section>


                <section class="bg-white">
                    <div class="container mx-auto px-6 py-10">
                        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 lg:text-4xl">Products</h1>

                        <p class="mt-4 text-center text-gray-500">List your products like Boilers,Drafters,Books,Bombers etc...</p>

                        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                            <div>
                                <img class="h-96 w-full rounded-lg object-cover" src="https://2.wlimg.com/product_images/bc-full/2022/5/9190450/cotton-boiler-suit-1652442449-6338333.jpeg" alt="" />
                                <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800">Boilers</h2>
                                <p class="mt-2 text-lg uppercase tracking-wider text-blue-500">Workshop Material</p>
                            </div>

                            <div>
                                <img class="h-96 w-full rounded-lg object-cover" src="data:image/jpeg;base64,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" alt="" />
                                <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800">Bombers</h2>
                                <p class="mt-2 text-lg uppercase tracking-wider text-blue-500">EG-material</p>
                            </div>

                            <div>
                                <img class="h-96 w-full rounded-lg object-cover" src="data:image/jpeg;base64,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" alt="" />
                                <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800">Drafters</h2>
                                <p class="mt-2 text-lg uppercase tracking-wider text-blue-500">EG-material</p>
                            </div>
                        </div>
                    </div>
                </section>



                <section class="bg-white">
                    <div class="h-[20rem] bg-gray-100">
                        <div class="container mx-auto px-6 py-10">
                            <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 lg:text-4xl">The Team Behind this</h1>

                            <div class="mx-auto mt-6 flex justify-center">
                                <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                                <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                                <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                            </div>

                            <p class="mx-auto mt-6 max-w-2xl text-center text-gray-500">Second year Computer Engineering students from Goa Engineering college, having the passion to build a tech around every problem we discover</p>
                        </div>
                    </div>


                    <div class="flex flex-wrap justify-center">

                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-6 py-10">
                            <div class="mt-8 rounded-xl border p-4 sm:p-6 bg-white">
                                <img src='shrey.jpeg' />
                                <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700">Shrey Singh</h1>

                                <p class="mt-2 capitalize text-gray-500"> Developer</p>

                                <div class="-mx-2 mt-3 flex">



                                    <a href="https://github.com/sshrey15" class="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Github">
                                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                                            </svg>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-6 py-10">
                            <div class="mt-8 rounded-xl border p-4 sm:p-6 bg-white">
                                <img src='vishnu.jpg' />
                                <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700">Vishnu Variyar</h1>

                                <p class="mt-2 capitalize text-gray-500"> Developer</p>

                                <div class="-mx-2 mt-3 flex">

                                    <a href="https://github.com/vishnuvariyar04" class="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Github">
                                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                                            </svg>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>




                    </div>

                </section>








                <section class="bg-white ">
                    <div class="container mx-auto px-6 py-10">
                        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800  lg:text-4xl">Student Testimonial</h1>

                        <div class="mx-auto mt-6 flex justify-center">
                            <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                            <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                            <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                        </div>

                        <div class="mx-auto mt-16 flex max-w-6xl items-start">
                            <button class="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div>
                                <p class="flex items-center text-center text-gray-500 lg:mx-8">GecBazaar has been a game-changer for me as a seller. Previously, connecting with potential buyers for engineering graphics, boiler suits, and books was a challenge. Thanks to this platform, I can effortlessly reach out to interested students, making the selling process smooth and efficient. Buyers, on the other hand, now have a convenient place to find these essential items from their seniors. It's a win-win situation for everyone involved! Kudos to GecBazaar for simplifying the buying and selling experience.</p>

                                <div class="mt-8 flex flex-col items-center justify-center">
                                    <img class="h-14 w-14 rounded-full object-cover" src="https://media.licdn.com/dms/image/D5603AQGuJ9_XPRlbRw/profile-displayphoto-shrink_800_800/0/1685169285417?e=1706745600&v=beta&t=tYQYAgwQ48-s0YxVgWedKYL-7FlrnXOyhuswavhF3uA" alt="" />

                                    <div class="mt-4 text-center">
                                        <h1 class="font-semibold text-gray-800 dark:text-white">Shubham</h1>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">Product Seller</span>
                                    </div>
                                </div>
                            </div>

                            <button class="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>






            </main >


        </>

    )
}

export default Landing