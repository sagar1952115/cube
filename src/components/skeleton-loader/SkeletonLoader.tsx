import React from 'react';
import './SkeletonLoader.css'; 

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="skeleton-item"></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
