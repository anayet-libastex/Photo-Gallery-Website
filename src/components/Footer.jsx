import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faYoutube, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#020518] border-t border-gray-800 text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand Setion */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
             <Link to="/">
                <FontAwesomeIcon icon={faPhotoFilm} className="text-orange-500" />
              <span>Photos<span className="text-orange-500">Gallery</span></span>
             </Link>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Capturing moments, creating memories. Explore our vast collection of high-quality images and find your inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-orange-500 text-sm transition-colors w-fit">
                Home
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-orange-500 text-sm transition-colors w-fit">
                Gallery
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-200">Follow Us</h3>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1D293D] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1D293D] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1D293D] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
              </a>
              {/* GitHub */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1D293D] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1D293D] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PhotosGallery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer