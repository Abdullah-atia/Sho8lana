import { Link } from "react-router-dom";
import React from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

function Navbar2() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="no-underline flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Freelance
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/signup"
              className="no-underline text-sm  text-blue-600 dark:text-blue "
            >
              Register
            </Link>
            <Link
              to="/signin"
              className="no-underline text-sm text-blue-600 dark:text-blue-500"
            >
              Login
            </Link>
            {/*  */}
            <TEDropdown className="flex justify-center">
              <TERipple rippleColor="light">
                <TEDropdownToggle className="flex items-center whitespace-nowrap rounded">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                    alt="user-photo"
                  />
                  <span className="ml-2 [&>svg]:w-5 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </TEDropdownToggle>
              </TERipple>

              <TEDropdownMenu>
                <TEDropdownItem preventCloseOnClick>
                  <span className="block w-full min-w-[160px] cursor-text whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal text-neutral-700 focus:outline-none dark:text-neutral-200">
                    Dropdown item text
                  </span>
                </TEDropdownItem>
                <TEDropdownItem>
                  <a className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                    Action
                  </a>
                </TEDropdownItem>
                <TEDropdownItem>
                  <a className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                    Another action
                  </a>
                </TEDropdownItem>
              </TEDropdownMenu>
            </TEDropdown>
            {/*  */}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex  items-start flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="no-underline text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="no-underline text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="no-underline text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="no-underline text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
