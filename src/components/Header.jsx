import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-darkGray p-4 fixed top-0 left-0 w-full shadow-md z-50 rounded-b-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <FaUtensils className="text-2xl" />
          <h1 className="text-2xl font-bold">Nova Cafe</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center text-lg p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <Link
                to="/"
                className="hover:text-blueWave"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-blueWave"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blueWave"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="hover:text-blueWave"
                onClick={() => setIsOpen(false)}
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blueWave"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
