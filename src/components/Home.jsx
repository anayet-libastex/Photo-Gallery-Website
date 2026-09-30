import {
    faArrowRight,
    faCamera,
    faImages,
    faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 md:py-24 
                    bg-linear-to-b from-[#020518] to-[#0a1128] 
                    light:from-gray-50 light:to-white 
                    text-white light:text-gray-900 
                    transition-colors duration-300">
      
      {/*  HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full 
                        border border-orange-500/30 
                        bg-orange-500/10 light:bg-orange-500/15 
                        text-orange-400 light:text-orange-600 
                        text-sm font-semibold tracking-wide">
          ✨ Welcome to PhotosGallery
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight 
                       text-white light:text-gray-900">
          Discover Beautiful <br />
          <span className="text-transparent bg-clip-text 
                           bg-linear-to-r from-orange-400 to-orange-600">
            Photography
          </span>
        </h1>
        
        {/* Sub Heading */}
        <p className="text-base md:text-lg 
                      text-gray-400 light:text-gray-600 
                      mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore a curated collection of stunning images. Find inspiration,
          browse high-quality photos, and enjoy the art of visual storytelling.
        </p>
        
        {/* CTA Button */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 
                     bg-orange-500 hover:bg-orange-600 
                     text-white font-bold py-3.5 px-8 rounded-full 
                     transition-all duration-300 
                     shadow-[0_0_20px_rgba(249,115,22,0.4)] 
                     hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] 
                     hover:-translate-y-1"
        >
          Explore Gallery
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      {/*  FEATURES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        
        {/* Feature 1 */}
        <div className="bg-[#1D293D] light:bg-white 
                        p-8 rounded-2xl 
                        border border-gray-800 light:border-gray-200 
                        hover:border-orange-500/50 
                        transition-colors duration-300 
                        flex flex-col items-center text-center
                        light:shadow-lg">
          <div className="w-14 h-14 bg-orange-500/20 rounded-full 
                          flex items-center justify-center 
                          mb-6 text-orange-500 text-2xl">
            <FontAwesomeIcon icon={faImages} />
          </div>
          <h3 className="text-xl font-bold mb-3 
                         text-white light:text-gray-900">
            100+ Photos
          </h3>
          <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
            Browse through a vast collection of beautiful, high-resolution images from various categories.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#1D293D] light:bg-white 
                        p-8 rounded-2xl 
                        border border-gray-800 light:border-gray-200 
                        hover:border-orange-500/50 
                        transition-colors duration-300 
                        flex flex-col items-center text-center
                        light:shadow-lg">
          <div className="w-14 h-14 bg-orange-500/20 rounded-full 
                          flex items-center justify-center 
                          mb-6 text-orange-500 text-2xl">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <h3 className="text-xl font-bold mb-3 
                         text-white light:text-gray-900">
            High Quality
          </h3>
          <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
            Every image is carefully selected to ensure the best visual experience for your eyes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#1D293D] light:bg-white 
                        p-8 rounded-2xl 
                        border border-gray-800 light:border-gray-200 
                        hover:border-orange-500/50 
                        transition-colors duration-300 
                        flex flex-col items-center text-center
                        light:shadow-lg">
          <div className="w-14 h-14 bg-orange-500/20 rounded-full 
                          flex items-center justify-center 
                          mb-6 text-orange-500 text-2xl">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </div>
          <h3 className="text-xl font-bold mb-3 
                         text-white light:text-gray-900">
            Inspiration
          </h3>
          <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
            Find new ideas and creative perspectives for your next photography project.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;