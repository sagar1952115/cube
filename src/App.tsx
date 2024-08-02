import React, { useState, useEffect, useRef } from 'react';
import Sidebar from "./components/sidebar/Sidebar"
import ContentPage from "./components/content/ContentPage"
import './App.css';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({ name: `Name ${i}`, title: `Title ${i} with some additional text` });
  }
  return data;
};

const App: React.FC = () => {
  const [data, setData] = useState(generateData());
  const [content,setContent]=useState(null);

  return (
    <div className="app">
      <Sidebar data={data} content={content} setContent={setContent} />
      {/* <div>{content?.name}</div> */}
      <ContentPage content={content} />
    </div>
  );
};

export default App;
