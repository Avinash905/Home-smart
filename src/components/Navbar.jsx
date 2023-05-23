import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-400 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="/"
          className="focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-50 top-9 hover:opacity-75 transition-opacity"
        >
          <img
            src={logo}
            alt="logo"
            className="w-32 sm:w-44 md:w-60"
          />
        </a>
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="z-10 lg:hidden focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          <FiMenu className="h-7 w-7" />
        </button>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center gap-4 absolute left-0 right-0 top-14 bg-amber-400 shadow-xl text-center p-6 text-lg lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full z-20`}
        >
          <a
            href="/"
            className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/"
            className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors lg:mr-auto"
          >
            Contact
          </a>
          <a
            href="/"
            className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Login
          </a>
          <a
            href="/"
            className="bg-teal-900 text-white shadow-xl hover:shadow-none py-2 px-6 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400 transition-shadow"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
