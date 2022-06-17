import React from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'

export const Navbar = () => {


  return (
    // <nav className='absolute flex flex-row justify-center top-0 right-0 px-6 py-4 text-black'>
    <nav className='flex flex-row justify-end px-6 py-4 text-black '>
      {/* <UserIcon className="h-6 w-6"/> */}
      <p className='text-xl mr-4'>LOGIN</p>
      {/* <ShoppingCartIcon className="h-4 w-6"/> */}
      <p className='text-xl'>SHOP</p>
    </nav>
  )
}
