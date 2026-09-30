import {
    faFacebook,
    faGithub,
    faLinkedin,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#020518] light:bg-white 
                       border-t border-gray-800 light:border-gray-200 
                       text-white light:text-gray-900 
                       pt-12 pb-6 mt-auto 
                       transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Link to="/">
                <FontAwesomeIcon icon={faPhotoFilm} className="text-orange-500" />
                <span className="text-white light:text-gray-900">
                  Photos<span className="text-orange-500">Gallery</span>
                </span>
              </Link>
            </h2>
            <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed max-w-xs">
              Capturing moments, creating memories. Explore our vast collection of high-quality images and find your inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-200 light:text-gray-800">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 light:text-gray-600 hover:text-orange-500 
                           text-sm transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-gray-400 light:text-gray-600 hover:text-orange-500 
                           text-sm transition-colors w-fit"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-200 light:text-gray-800">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {[
                { icon: faLinkedin, label: "LinkedIn" },
                { icon: faXTwitter, label: "X" },
                { icon: faYoutube, label: "YouTube" },
                { icon: faGithub, label: "GitHub" },
                { icon: faFacebook, label: "Facebook" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full 
                             bg-[#1D293D] light:bg-gray-100 
                             flex items-center justify-center 
                             text-gray-400 light:text-gray-600 
                             hover:bg-orange-500 hover:text-white 
                             transition-all duration-300 
                             hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 light:border-gray-200 
                        pt-6 flex flex-col md:flex-row justify-between items-center gap-4 
                        text-gray-500 light:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PhotosGallery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;