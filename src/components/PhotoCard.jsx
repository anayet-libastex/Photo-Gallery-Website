import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faFolder } from '@fortawesome/free-solid-svg-icons';

const PhotoCard = ({photos}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {console.log(photos)}
      {
        photos.map((photo) => ( 
          <div key={photo.id} className="flex flex-col h-full bg-[#1D293D] shadow-2xl rounded-xl overflow-hidden gap-2">
           <img className="w-full h-56 object-cover object-center rounded-t-xl m-0" src={photo.thumbnailUrl} alt={photo.title} />
           <div className= "flex flex-col justify-between flex-1 p-4 gap-2.5">
             <p className="capitalize text-[17px] text-white font-semibold">{photo.title}</p>
             <div className="flex justify-between">
             <p className="text-gray-400"><FontAwesomeIcon icon={faImages} className="text-indigo-500 text-xl" />Photo ID: {photo.id}</p>
             <p className="text-gray-300"><FontAwesomeIcon icon={faFolder} className="text-yellow-500 text-xl" />Album ID: {photo.albumId}</p>
             </div>
             <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md py-2 cursor-pointer w-full self-center">View Details</button>
           </div>
          </div>
        ))
      }
    </div>
  )
}

export default PhotoCard