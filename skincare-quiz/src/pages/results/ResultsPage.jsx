import './results.css';
import resultsImage from '../../assets/results-page-image.jpg';
import { useEffect, useState } from 'react';

function ResultsPage() {
  const [product, setProduct] = useState({});
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(
        'https://jeval.com.au/collections/hair-care/products.json?page=1'
      );
      const parsed = await result.json();
      setProduct(parsed?.products[1]);
      setImageSrc(parsed?.products[1].images[0].src);
    };
    fetchProducts();
  }, []);

  return (
    <div className='results-content'>
      <div className='lemons__image'>
        <img
          src={resultsImage}
          alt='image'
        />
      </div>
      <div className='results__headings'>
        <h1>Build you everyday self care routine.</h1>
        <h2>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </h2>
        <button className='retake-btn'>Retake quiz</button>
      </div>
      <div className='results'>
        <div className='daily__routine'>
          <h2>Daily routine</h2>
          <p>
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </p>
        </div>
        <div className='product'>
          <img
            src={imageSrc}
            alt='product-image'
          />
          <div className='info'>
            <h3>{product.title}</h3>
            <p>{product.product_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
