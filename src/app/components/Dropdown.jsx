import React from 'react'

const dropdown = () => {
    function drop(){
        document.getElementById("dropdown-menu").classList.toggle("hidden");
    }
  return (
    <>
    <div>
    <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              onClick={drop}
              type="button"
              class="flex min-h-[3rem] items-center justify-between rounded-md bg-stone-100 px-4 py-2 text-stone-800"
            >
              Type
              <span
                x-show="counter"
                x-text="counter"
                class="bg-green-500 text-green-100 card-pills--counter ml-2 rounded-md px-2 py-1 text-sm"
                style="display: none"
                >0</span>
              
              <i
                class="fas fa-angle-down pl-3 text-stone-700 dark:text-stone-300"
              ></i>
            </button>
    </div>
  
    
    </>
  )
}

export default dropdown