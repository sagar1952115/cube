import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import SkeletonLoader from '../skeleton-loader/SkeletonLoader';
import PhotoGrid from '../photo-grid/PhotoGrid';
import './ContentPage.css'; 
import EmptyContentPage from "./EmptyContentPage"

const PEXELS_API_KEY = 'SjVb7EK79yMkFwWFmqM64d8pz7oJBmwfdUgkbNrz11k7PthrqNosmgGK'; // Replace with your Pexels API key

const ContentPage: React.FC = ({content}) => {
  if(!content){
    return <EmptyContentPage/>;
  }

  return (
   <div className="content">
      <div className="user-info">
        <h1>{content?.name}</h1>
        <p>{content?.title}</p>
      </div>
      <PhotoGrid content={content}/>
   </div>
  );
};

export default ContentPage;
