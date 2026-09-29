import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark, faFolder, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import PhotoCard from "./PhotoCard";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Album Filter State (default = "all")
  const [selectedAlbum, setSelectedAlbum] = useState("all");

  //  Custom Dropdown State
  const [isAlbumDropdownOpen, setIsAlbumDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=100"
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

  //  Dropdown-Close functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAlbumDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading)
    return (
      <div className="w-full min-h-screen bg-black text-white text-xl flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return <h3 className="text-xl text-red-500 text-center p-10">{error}</h3>;

  // Unique Album ID list
  const uniqueAlbums = [...new Set(photos.map((photo) => photo.albumId))].sort(
    (a, b) => a - b
  );

  // Search + Album filter
  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch = photo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesAlbum =
      selectedAlbum === "all" || photo.albumId === Number(selectedAlbum);
    return matchesSearch && matchesAlbum;
  });

  // Clear All Filters
  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedAlbum("all");
  };

  //  Album Select Handler
  const handleAlbumSelect = (albumId) => {
    setSelectedAlbum(albumId);
    setIsAlbumDropdownOpen(false);
  };

  return (
    <div className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      
      {/* Search + Filter Section */}
      <div className="w-full max-w-4xl mx-auto mb-6 md:mb-8 flex flex-col md:flex-row gap-3 md:gap-4">
        
        {/* Search Box */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 text-sm md:text-base"
            />
          </div>

          <input
            type="text"
            placeholder="Search photos by title..."
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

        {/* Custom Album Dropdown  */}
        <div ref={dropdownRef} className="relative w-full md:w-64">
          
          {/* Trigger Button */}
          <button
            type="button"
            onClick={() => setIsAlbumDropdownOpen(!isAlbumDropdownOpen)}
            className="w-full bg-[#1D293D] border border-gray-700 text-white rounded-full 
                       py-2.5 md:py-3 
                       pl-9 md:pl-12 
                       pr-10 
                       text-sm md:text-base text-left
                       focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 
                       transition-all shadow-lg cursor-pointer flex items-center justify-between"
          >
            <span className="truncate">
              {selectedAlbum === "all" ? "All Albums" : `Album ${selectedAlbum}`}
            </span>
          </button>

          {/* Folder Icon (Left) */}
          <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faFolder}
              className="text-yellow-500 text-sm md:text-base"
            />
          </div>

   
        {/* Chevron Arrow (Right) */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`transition-transform duration-200 ${
              isAlbumDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

          {/*  Dropdown Options List */}
          {isAlbumDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1D293D] border border-gray-700 rounded-2xl shadow-2xl z-50 max-h-64 overflow-y-auto">
              
              {/* All Albums Option */}
              <button
                type="button"
                onClick={() => handleAlbumSelect("all")}
                className={`w-full text-left px-4 py-2.5 text-sm md:text-base flex items-center justify-between transition-colors cursor-pointer hover:bg-orange-500/20 ${
                  selectedAlbum === "all" ? "text-orange-500 font-semibold" : "text-white"
                }`}
              >
                <span>All Albums</span>
                {selectedAlbum === "all" && <FontAwesomeIcon icon={faCheck} />}
              </button>

              {/* Divider */}
              <div className="border-t border-gray-700"></div>

              {/* Album Options */}
              {uniqueAlbums.map((albumId) => (
                <button
                  key={albumId}
                  type="button"
                  onClick={() => handleAlbumSelect(albumId)}
                  className={`w-full text-left px-4 py-2.5 text-sm md:text-base flex items-center justify-between transition-colors cursor-pointer hover:bg-orange-500/20 ${
                    selectedAlbum === albumId ? "text-orange-500 font-semibold" : "text-white"
                  }`}
                >
                  <span>Album {albumId}</span>
                  {selectedAlbum === albumId && <FontAwesomeIcon icon={faCheck} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  Result Count & Clear Filters */}
      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6 gap-2 border-b border-gray-800 pb-4">
        <p className="text-gray-400 text-sm md:text-base">
          Showing <span className="text-orange-500 font-bold">{filteredPhotos.length}</span> of {photos.length} photos
        </p>

        {(searchTerm || selectedAlbum !== "all") && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-400 hover:text-orange-500 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
            Clear all filters
          </button>
        )}
      </div>

      {/*  Photo Cards */}
      <PhotoCard photos={filteredPhotos} />

      {filteredPhotos.length === 0 && (
        <div className="text-center text-gray-400 mt-10 text-base md:text-xl px-4">
          No photos found
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedAlbum !== "all" && ` in Album ${selectedAlbum}`}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;