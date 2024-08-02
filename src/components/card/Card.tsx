import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  title: string;
  id:number;
  handleClick: (data: { name: string; title: string; id: number }) => void;
  content: { name: string; title: string; id: number } | null;
}

const Card: React.FC<CardProps> = ({ name, id, title,handleClick,content }) => {
  return (
    <div onClick={()=>handleClick({name,title,id})} className={`card ${content?.id===id?"active":""}`}>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default Card;
