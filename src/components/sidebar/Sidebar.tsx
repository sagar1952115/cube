import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Sidebar.css';
import Card from '../card/Card';

interface Item {
  name: string;
  title: string;
  content:object;
}

interface SidebarProps {
  data: Item[];
  content:null;
}

const Sidebar: React.FC<SidebarProps> = ({ data,content,setContent }) => {
  const [items, setItems] = useState<Item[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick=(data)=>{
    setContent(data)
  }
  
  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...data.slice(prevItems.length, prevItems.length + 25),
    ]);
  }, [data]);
  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);


  const handleScroll = () => {
    setIsScrolling(true);
    if (sidebarRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreItems();
      }
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div
      className={`sidebar ${isScrolling ? 'scrolling' : ''}`}
      ref={sidebarRef}
      onScroll={handleScroll}
    >
      {items.map((item, index) => (
        <Card handleClick={handleClick} content={content} id={index} key={index} name={item.name} title={item.title} />
      ))}
    </div>
  );
};

export default Sidebar;
