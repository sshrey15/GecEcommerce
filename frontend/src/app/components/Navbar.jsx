"use client"
import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // corrected import
import { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data } = useSession();
  
  const router = useRouter();

  return (
    <nav className="bg-white drop-shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:flex-row">
        <a className="flex items-center">
         
          <span className="text-2xl font-semibold whitespace-nowrap text-black">Gec<span className='text-blue-500'>Bazaar</span></span>

         
        </a>
        <div className="flex md:order-2">
          {data?.user ? (
            <div className="flex items-center space-x-4 md:space-x-2">
              <Link href="/sellitem" >
                <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Sell Item</button>
              </Link>
              
              <button onClick={() => signOut('google')} className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Log Out
              </button>
              <div className="text-black flex items-center ml-4 md:ml-2">
                <img src={data?.user?.image} width={40} height={40} alt="User Image" className='rounded-3xl mr-2' /> {/* Added margin */}
                
              </div>
            </div>
          ) : (
            <button onClick={() => signIn('google')} className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2">
            
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar