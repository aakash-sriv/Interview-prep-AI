import React from 'react'

const Spinnerloader = () => {
  return (
    <div role='status'>
        <svg
            aria-hidden = "true"
            class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-amber-50"
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >    
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 59 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4"
                fill='currentColor'
            />
            <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05'
                fill='currentFill'
            />
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
  )
}

export default Spinnerloader