import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='w-full flex px-6 justify-between items-center gap-5 bg-[#CD853F]'>
      <div className='py-7 text-[#fff]'>
        <h1 className='text-2xl font-bold'>Kart10</h1>
      </div>
      <div className='flex justify-center items-center gap-5 font-medium text-[#fff] text-lg'>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div className='py-2 px-3 rounded-full text-[#fff] hover:bg-white hover:text-black transition-colors cursor-pointer'>
          <FontAwesomeIcon className='text-xl' icon={faGlobe} />
        </div>
      </div>
    </div>
  )
}
