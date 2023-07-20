import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from "../../assets/svg/intellifish_logo.svg"
import useAuth from '../../hooks/UseAuth';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { logout } = useAuth();

  return (
    <nav className="bg-white border-b-2 border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center p-4">
            <img src={Logo} alt="25" />
            <span className="text-black text-lg font-semibold">IntelliFish</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-black hover:bg-cyan-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/fishes"
                className="text-black hover:bg-cyan-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Peces
              </Link>
              <Link
                to="/plants"
                className="text-black hover:bg-cyan-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Plantas
              </Link>
              <Link
                to="/fishbowl"
                className="text-black hover:bg-cyan-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pecera
              </Link>
              <Link
                to="/statistics"
                className="text-black hover:bg-cyan-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Estadisticas
              </Link>
              <Link
                to="/login"
                className="text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={logout}
              >
                Cerrar sesión
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-black hover:bg-cyan-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/fishes"
              className="text-black hover:bg-cyan-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Peces
            </Link>
            <Link
              to="/plants"
              className="text-black hover:bg-cyan-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Plantas
            </Link>
            <Link
              to="/fishbowl"
              className="text-black hover:bg-cyan-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pecera
            </Link>
            <Link
              to="/statistics"
              className="text-black hover:bg-cyan-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Estadisticas
            </Link>
            <Link
                to="/login"
                className="text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={logout}
              >
                Cerrar sesión
              </Link>
          </div>
        </div>
      )}
    </nav>
    );
};
export default Navbar;
