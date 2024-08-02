import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import "./PhotoGrid.css";

const PEXELS_API_KEY =
  "SjVb7EK79yMkFwWFmqM64d8pz7oJBmwfdUgkbNrz11k7PthrqNosmgGK";

const PhotoGrid: React.FC = ({ content }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPhotos = useCallback(async () => {
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const response = await axios.get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        params: {
          per_page: 9,
          page: randomPage,
        },
      });
      setPhotos(response.data.photos.map((photo: any) => photo.src.small));
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, [fetchPhotos, content]);

  return (
    <div className="photo-container">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="photo-grid">
          {photos.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Photo ${index + 1}`}
              className="photo-item"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
