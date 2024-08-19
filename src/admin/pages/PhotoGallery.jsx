import { useState, useEffect } from "react";
import axios from "axios";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1); // Start at page 1
  const [totalPages, setTotalPages] = useState(0);
  const category = "Wedding Ceremony"; // Default category for filtering
  const limit = 20; // Fixed number of photos per page

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "http://localhost/studio-my-art/test.php",
          {
            params: {
              page: page,
              limit: limit,
              category: category,
            },
          }
        );

        setPhotos(response.data.photos);
        setTotalPages(response.data.meta.total_pages);
      } catch (error) {
        console.error("There was an error fetching the photos!", error);
      }
    };

    fetchPhotos();
  }, [page, category]); // Dependencies include page and category

  // Calculate the total number of pages
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); // Go to the next page
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1); // Go to the previous page
    }
  };

  return (
    <div>
      <h1>Photo Gallery</h1>

      {/* Display Photos */}
      <div className="grid grid-cols-4 bg-primary">
        {photos.map((photo) => (
          <div key={photo.id}>
            <p>{photo.category}</p>
            <img
              src={`http://localhost/studio-my-art/uploads/${photo.file}`}
              alt={photo.category}
              width="200"
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevPage} disabled={page <= 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={page >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
