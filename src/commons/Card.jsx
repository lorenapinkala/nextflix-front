import React from 'react'
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Card = ({item}) => {
  const title = item.title || item.name
  const truncatedTitle = title.length > 12 ? title.substring(0, 10) + '...' : title;

  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const roundedRating = Math.floor(item.vote_average * 10) / 10;


  return (
    <div className={`h-1/5 w-9/12 flex-column ${isHovered ? 'scale-100' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className='h-15'>
        <img src={imageUrl} alt='imagen de pelicula' className='h-full rounded' />
      </div>
      <div className='bg-zinc-900 h-auto rounded'>
        <p className='ml-2 text-neutral-50'>{truncatedTitle}</p>
        <div className='flex'>
          <AiFillStar className='text-yellow-500 ml-3 mt-1' />
          <p className='ml-2 text-neutral-50'>{roundedRating}</p>
        </div>
      </div>
    </div>
  )
}

export default Card