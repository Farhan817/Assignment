import { IconBell, IconMenu2 } from '@tabler/icons-react'
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-10  flex-nowrap bg-dark-purple pt-2">
      <h1 className="text-xl text-white font-bold cursor-pointer">Logo</h1>
      <ul
        className={
          ' flex flex-row justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex'
        }
      >
        <IconBell stroke={2} />
        <img
          className="w-10 h-10 rounded-full"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="Rounded avatar"
        ></img>
      </ul>
    </div>
  )
}

export default NavBar
