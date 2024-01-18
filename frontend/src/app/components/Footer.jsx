import React from 'react'

const Footer = () => {
  return (
    <>
        
<footer class="bg-gray-200 shadow-lg"> {/* Changed background color and added shadow */}
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-grey">Gec<span className='text-blue-500'>Bazaar</span></span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
             
              <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Shrey</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/sshrey15" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://twitter.com/Shreysi29721576" class="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Vishnu</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/vishnuvariyar04" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://twitter.com/VariyarVishnu" class="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023  All Rights Reserved.
          </span>
         
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer