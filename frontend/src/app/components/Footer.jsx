import React from 'react'

const Footer = () => {
  return (
    <>
        
<footer className="bg-gray-200 shadow-lg"> {/* Changed background color and added shadow */}
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-grey">Gec<span className='text-blue-500'>Bazaar</span></span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
             
              <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Shrey</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/sshrey15" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://twitter.com/Shreysi29721576" className="hover:underline">Twitter</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.instagram.com/sshreysingh/" className="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/sshrey15/" className="hover:underline">LinkedIn</a>
                      </li>
                  </ul>
              </div>
              <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Vishnu</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/vishnuvariyar04" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://twitter.com/VariyarVishnu" className="hover:underline">Twitter</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.instagram.com/vishnuvariyar/" className="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/vishnu-variyar-7aa17321b/" className="hover:underline">LinkedIn</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024  All Rights Reserved.
          </span>
         
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer