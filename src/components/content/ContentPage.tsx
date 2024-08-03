import React from 'react';
import PhotoGrid from '../photo-grid/PhotoGrid';
import './ContentPage.css'; 
import EmptyContentPage from "./EmptyContentPage"

interface Item {
  id:number;
  name: string;
  title: string;
  address:string;
}

interface ContentPageProps {
  content: Item | null; // Update with the appropriate type if necessary
}

const ContentPage: React.FC<ContentPageProps> = ({content}) => {
  if(!content){
    return <EmptyContentPage/>;
  }

  return (
   <div className="content">
            <h1>{content?.name} details here</h1>
            <div className="user-info">
                <div className="info-item">
                    <span className="label">Name:</span>
                    <p className="title">{content?.name}</p>
                </div>
                <div className="info-item">
                    <span className="label">Title:</span>
                    <p className="title">{content?.title}</p>
                </div>
                <div className="info-item">
                    <span className="label">Address:</span>
                    <p className="title">{content?.address}</p>
                </div>
            </div>
      <PhotoGrid content={content}/>
   </div>
  );
};

export default ContentPage;
