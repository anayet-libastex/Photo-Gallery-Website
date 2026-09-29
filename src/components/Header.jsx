import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faCamera, faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex-1 md:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-200 text-sm md:text-[16px] ${
      isActive
        ? 'bg-orange-500 text-white shadow-md'
        : 'text-gray-300 hover:text-orange-400'
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
    <div className="bg-[#020518] border-b border-gray-800 py-3.5 mb-10 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link to="/" onClick={closeMobileMenu}>
            <h1 className="text-white text-xl md:text-2xl font-bold flex items-center gap-1">
              <FontAwesomeIcon icon={faPhotoFilm} className="text-orange-500" />
              Photos<span className="text-orange-500">Gallery</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center p-1 rounded-full text-white font-medium border border-gray-700">
          <NavLink to="/" className={linkClass}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            <FontAwesomeIcon icon={faCamera} />
            MyGallery
          </NavLink> 
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {/* Icon Change Functionality */}
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020518] border-b border-gray-800 shadow-xl flex flex-col p-4 gap-3 z-50">
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
  )
}

export default Header