import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white text-darkGray p-4 fixed top-0 left-0 w-full shadow-md z-50 rounded-b-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaUtensils className="text-xl" />
          <h1 className="text-xl font-bold">Nova Cafe</h1>
        </div>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link to="/" className="hover:text-blueWave">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-blueWave">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blueWave">
                About
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-blueWave">
                Order
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blueWave">
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
