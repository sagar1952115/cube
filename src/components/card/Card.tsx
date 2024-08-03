import React from 'react';
import './Card.css';

interface Item {
  id:number;
  name: string;
  title: string;
  address:string;
}

interface CardProps {
 item:Item;
  handleClick: (data: Item) => void;
  content: { name: string; title: string; id: number } | null;
}

const Card: React.FC<CardProps> = ({ item,handleClick,content }) => {
  return (
    <div onClick={()=>handleClick(item)} className={`card ${content?.id===item?.id?"active":""}`}>
      <h3>{item?.name}</h3>
      <p>{item?.title}</p>
    </div>
  );
};

export default Card;
