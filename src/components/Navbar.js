import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
   <div className='mb-3'>
    <nav className="bg-white border-gray-200 dark:bg-gray-900"></nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl ">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!capitalize text-primary dark:!text-[#fff] active:!text-[yellow]"
                  >
                    Task 1
                  </a>
                </li>
                <li>
                  <a
                    href="/task2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!capitalize text-primary dark:!text-[#fff] active:!text-[yellow]"
                  >
                    Task 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   </div>
  )
}
