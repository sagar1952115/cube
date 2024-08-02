import React from 'react';
import "./ContentPage.css"

const EmptyContentPage: React.FC = () => {
  return (
    <div className="empty-content">
      <p>Please select a customer to see the details.</p>
    </div>
  );
};

export default EmptyContentPage;
