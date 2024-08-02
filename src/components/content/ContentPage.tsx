import React from 'react';
import PhotoGrid from '../photo-grid/PhotoGrid';
import './ContentPage.css'; 
import EmptyContentPage from "./EmptyContentPage"

interface ContentPageProps {
  content: { name: string; title: string; id: number } | null; // Update with the appropriate type if necessary
}

const ContentPage: React.FC<ContentPageProps> = ({content}) => {
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
