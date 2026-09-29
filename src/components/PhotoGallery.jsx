import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Search State
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=100",
        );
        if (!response.ok) {
          throw new Error(`HTTP Error ! ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="w-full min-h-screen bg-black text-white text-xl flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return <h3 className="text-xl text-red-500 text-center p-10">{error}</h3>;

  //Search Functionality
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      {/*  Search Box */}
      <div className="relative w-full max-w-lg mx-auto mb-8 md:mb-10">
        {/* Search Icon (Left) */}
        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 text-sm md:text-base"
          />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1D293D] border border-gray-700 text-white rounded-full 
                     py-2.5 md:py-3 
                     pl-9 md:pl-12 
                     pr-9 md:pr-10 
                     text-sm md:text-base
                     focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 
                     transition-all placeholder-gray-500 shadow-lg"
        />

        {/* Clear (Cross) Icon (Right) */}
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Clear search"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base md:text-lg" />
          </button>
        )}
      </div>

      {/*  Photo Cards */}
      <PhotoCard photos={filteredPhotos} />

      {/* If Search Image Not Found */}
      {filteredPhotos.length === 0 && (
        <div className="text-center text-gray-400 mt-10 text-base md:text-xl px-4">
          No photos found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
