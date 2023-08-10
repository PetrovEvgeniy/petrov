import React from 'react'

const Footer = () => 
(<footer className="bg-tertiary text-center text-white">
  <div className=" px-6 pt-6">
    <div className="mb-2 flex justify-center">

      

      <a
        href="https://www.linkedin.com/in/petrov-evgeniy"
        type="button"
        className="m-1 mr-5 h-20 w-20 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-violet-900 hover:bg-opacity-4 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-10"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>

      <a
        href="https://github.com/PetrovEvgeniy"
        type="button"
        className="m-1 h-20 w-20 mr-5 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-violet-900 hover:bg-opacity-4 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-10"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      <a
        href="https://twitter.com/EvgeniyPetrov21"
        type="button"
        className="m-1 h-20 w-20 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-violet-900 hover:bg-opacity-4 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
       <svg xmlns="http://www.w3.org/2000/svg"    
          className="mx-auto h-full w-10"
          fill="white"
          viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
      </a>

    </div>
  </div>

  <div
    className="p-5 mb-1 text-center">
    © 2023 
    <a className="text-violet-600" href="#about"
      > <span className="sm:hidden lg:inline-block">Evgeniy</span> Petrov </a
    >
     | All rights reserved.
  </div>
</footer>
);
  

export default Footer