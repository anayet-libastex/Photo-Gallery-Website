import {
    faBars,
    faCamera,
    faHouse,
    faMoon,
    faPhotoFilm,
    faSun,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = ({ theme, toggleTheme }) => {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex-1 md:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-200 text-sm md:text-[16px] ${
      isActive
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-300 light:text-gray-700 hover:text-orange-400"
    }`;

  // Mobile Menu Toggle Function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close Mobile Menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#020518] light:bg-white border-b border-gray-800 light:border-gray-200 py-3.5 mb-10 relative z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link to="/" onClick={closeMobileMenu}>
            <h1 className="text-white light:text-gray-900 text-xl md:text-2xl font-bold flex items-center gap-1">
              <FontAwesomeIcon icon={faPhotoFilm} className="text-orange-500" />
              Photos<span className="text-orange-500">Gallery</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center p-1 rounded-full text-white light:text-gray-900 font-medium border border-gray-700 light:border-gray-300 transition-colors">
          <NavLink to="/" className={linkClass}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            <FontAwesomeIcon icon={faCamera} />
            MyGallery
          </NavLink>
        </nav>

        {/* Right Side: Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center 
                       bg-gray-800 light:bg-gray-200 
                       text-orange-400 light:text-orange-500 
                       hover:scale-110 active:scale-95 
                       transition-all duration-200 cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white light:text-gray-900 text-2xl focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {/* Icon Change Functionality */}
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full 
                        bg-[#020518] light:bg-white 
                        border-b border-gray-800 light:border-gray-200 
                        shadow-xl flex flex-col p-4 gap-3 z-50
                        transition-colors duration-300">
          <NavLink to="/" className={linkClass} onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faCamera} />
            MyGallery
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;