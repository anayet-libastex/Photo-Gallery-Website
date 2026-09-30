import {
    faFolder,
    faHashtag,
    faImages,
    faLink,
    faUpRightFromSquare,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const PhotoCard = ({ photos }) => {
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Escape Handle
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };

    if (selectedPhoto) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col h-full 
                       bg-[#1D293D] light:bg-white 
                       shadow-2xl light:shadow-lg 
                       rounded-xl overflow-hidden gap-2 
                       border border-transparent light:border-gray-200
                       transition-colors duration-300"
          >
            <img
              className="w-full h-56 object-cover object-center rounded-t-xl m-0"
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <div className="flex flex-col justify-between flex-1 p-4 gap-2.5">
              
              {/* Title */}
              <p className="capitalize text-[17px] font-semibold line-clamp-2 
                            text-white light:text-gray-900">
                {photo.title}
              </p>

              {/* Photo & Album IDs */}
              <div className="flex justify-between">
                <p className="text-gray-400 light:text-gray-600 flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faImages}
                    className="text-indigo-500 text-xl"
                  />
                  Photo ID: {photo.id}
                </p>
                <p className="text-gray-300 light:text-gray-700 flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faFolder}
                    className="text-yellow-500 text-xl"
                  />
                  Album ID: {photo.albumId}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedPhoto(photo)}
                className="bg-indigo-600 text-white hover:bg-indigo-700 
                           rounded-md py-2 cursor-pointer w-full self-center 
                           transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*  Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center 
                     bg-black/80 light:bg-black/50 
                     backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#0F172A] light:bg-white 
                       rounded-2xl w-full max-w-lg my-8 
                       shadow-2xl 
                       border border-gray-800 light:border-gray-200 
                       relative overflow-hidden 
                       transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cross Icon (Top Right) */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 
                         bg-black/60 light:bg-white/90 
                         hover:bg-orange-500 
                         text-white light:text-gray-900 hover:text-white 
                         w-9 h-9 md:w-10 md:h-10 
                         rounded-full 
                         flex items-center justify-center 
                         backdrop-blur-sm
                         light:shadow-md
                         transition-all duration-200 
                         hover:scale-110 active:scale-95
                         cursor-pointer"
              title="Close"
              aria-label="Close modal"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-sm md:text-base"
              />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-7">
              
              {/* Title */}
              <h2 className="text-lg md:text-xl font-bold capitalize leading-snug mb-2 
                             text-white light:text-gray-900">
                {selectedPhoto.title}
              </h2>
              <p className="text-xs md:text-sm mb-6 
                            text-gray-500 light:text-gray-500">
                Photo details and metadata
              </p>

              {/* Divider */}
              <div className="border-t border-gray-800 light:border-gray-200 mb-5"></div>

              {/* Details List */}
              <div className="space-y-4 mb-6">
                
                {/* Photo ID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faHashtag}
                      className="text-indigo-400 text-sm w-4"
                    />
                    <span className="text-gray-400 light:text-gray-600 text-sm">
                      Photo ID
                    </span>
                  </div>
                  <span className="text-white light:text-gray-900 text-sm font-semibold">
                    {selectedPhoto.id}
                  </span>
                </div>

                {/* Album ID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="text-yellow-400 text-sm w-4"
                    />
                    <span className="text-gray-400 light:text-gray-600 text-sm">
                      Album ID
                    </span>
                  </div>
                  <span className="text-white light:text-gray-900 text-sm font-semibold">
                    {selectedPhoto.albumId}
                  </span>
                </div>

                {/* Image URL */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="text-orange-400 text-sm w-4"
                    />
                    <span className="text-gray-400 light:text-gray-600 text-sm">
                      URL
                    </span>
                  </div>
                  <a
                    href={selectedPhoto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 
                               light:text-blue-600 light:hover:text-blue-700 
                               text-xs md:text-sm transition-colors 
                               text-right break-all line-clamp-2"
                    title={selectedPhoto.url}
                  >
                    {selectedPhoto.url.replace("https://via.placeholder.com/", "...")}
                  </a>
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-gray-800 light:border-gray-200 mb-5"></div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="flex-1 
                             bg-transparent hover:bg-gray-800 light:hover:bg-gray-100 
                             text-gray-300 light:text-gray-700 
                             font-medium py-2.5 rounded-lg 
                             border border-gray-700 light:border-gray-300 
                             transition-all duration-200 cursor-pointer text-sm"
                >
                  Close
                </button>
                <a
                  href={selectedPhoto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 
                             text-white font-medium py-2.5 rounded-lg 
                             transition-all duration-200 cursor-pointer text-sm
                             flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="text-xs" />
                  Open Image
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;