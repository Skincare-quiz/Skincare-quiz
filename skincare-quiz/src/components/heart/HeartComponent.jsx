import React, { useEffect, useState } from 'react';
import './heart-component.css';

function HeartComponent({ product, toggleButton, setToggleButton }) {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const likedProductsItem =
      JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedProducts(likedProductsItem);
  }, [toggleButton]);

  const likeProduct = () => {
    const currentLikedProducts =
      JSON.parse(localStorage.getItem('likedProducts')) || [];
    localStorage.setItem(
      'likedProducts',
      JSON.stringify([...currentLikedProducts, product.id])
    );

    /**Updating oder of products */
    const products = JSON.parse(localStorage.getItem('products'));
    const index = products.indexOf(
      products.filter((productObj) => productObj.id === product.id)[0]
    );
    const removedProduct = products.splice(index, 1)[0];
    products.unshift(removedProduct);
    localStorage.setItem('products', JSON.stringify(products));
    /**Updating Parent component`s Toggle state to re-render and
     * display new order of items */
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

    /**Updating oder of products */
    const products = JSON.parse(localStorage.getItem('products'));
    const index = products.indexOf(
      products.filter((productObj) => productObj.id === product.id)
    )[0];
    const removedProduct = products.splice(index, 1)[0];
    products.push(removedProduct);
    localStorage.setItem('products', JSON.stringify(products));
    /**Updating Parent component`s Toggle state to re-render and
     * display new order of items */
    setToggleButton((prev) => !prev);
  };

  return (
    <>
      {likedProducts.includes(product.id) ? (
        <span
          className='dislike'
          onClick={dislikeProduct}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='isLiked'
            viewBox='0 0 16 16'
          >
            <path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314' />
          </svg>
        </span>
      ) : (
        <span
          className='like'
          onClick={likeProduct}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className=''
            viewBox='0 0 16 16'
          >
            <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15' />
          </svg>
        </span>
      )}
    </>
  );
}

export default HeartComponent;
