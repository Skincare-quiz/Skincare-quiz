import React, { useEffect, useState } from 'react';
import './heart-component.css';

function HeartComponent({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    const likedProductsItem =
      JSON.parse(localStorage.getItem('likedProducts')) || [];
    likedProductsItem.includes(product.id)
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [toggleButton]);

  const likeProduct = () => {
    const currentLikedProducts =
      JSON.parse(localStorage.getItem('likedProducts')) || [];
    localStorage.setItem(
      'likedProducts',
      JSON.stringify([...currentLikedProducts, product.id])
    );
    setToggleButton((prev) => !prev);
  };

  const dislikeProduct = () => {
    const currentLikedProducts =
      JSON.parse(localStorage.getItem('likedProducts')) || [];
    const indexOfProductId = currentLikedProducts.indexOf(product.id);
    currentLikedProducts.splice(indexOfProductId, 1);
    localStorage.setItem(
      'likedProducts',
      JSON.stringify([...currentLikedProducts])
    );
    setToggleButton((prev) => !prev);
  };

  return (
    <span onClick={isLiked ? dislikeProduct : likeProduct}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='currentColor'
        className={isLiked ? 'isLiked' : ''}
        viewBox='0 0 16 16'
      >
        {isLiked ? (
          <path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314' />
        ) : (
          <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15' />
        )}
      </svg>
    </span>
  );
}

export default HeartComponent;
