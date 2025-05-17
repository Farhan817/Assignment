import React, { FC } from 'react'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import { SidebarProps } from 'types/Sidebar'
import { NavLink } from 'react-router'

const Sidebar: FC<SidebarProps> = ({ open, handelOpen, menuList }) => {
  return (
    <nav
      role="navigation"
      className={`${
        open ? 'w-72' : 'w-20'
      } bg-dark-purple h-screen p--5 pt-8 relative duration-300`}
    >
      {!open ? (
        <IconArrowRight
          onClick={() => handelOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <IconArrowLeft
          onClick={() => handelOpen(false)}
          className="cursor-pointer"
        />
      )}
      <ul>
        {menuList.map((menuItem, indx) => (
          <>
            <NavLink to={menuItem.path}
              key={indx}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-1 hover:bg-light-white rounded-md  
              }`}
            >
              {menuItem.title}
            </NavLink>
          </>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
