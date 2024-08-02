import React, { useState } from 'react';
import Sidebar from "./components/sidebar/Sidebar"
import ContentPage from "./components/content/ContentPage"
import './App.css';

interface DataType {
  id: number;
  name: string;
  title: string;
}


const generateData = () => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({ id: i, name: `Name ${i}`, title: `Title ${i} with some additional text` });
  }
  return data;
};

const App: React.FC = () => {
  const [data, _] = useState(generateData());
  const [content,setContent]=useState<DataType | null>(null);

  return (
    <div className="app">
      <Sidebar data={data} content={content} setContent={setContent} />
      <ContentPage content={content} />
    </div>
  );
};

export default App;
