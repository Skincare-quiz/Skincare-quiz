import './results.css';
import resultsImage from '../../assets/results-page-image.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeartComponent from '../../components/heart/HeartComponent';
import Pagination from '../../components/pagination/Pagination';

function ResultsPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * 2;
  const indexOfFirstPost = indexOfLastPost - 2;
  const productsItem = JSON.parse(localStorage.getItem('products')) || [];
  /*Creating a Map in case of duplicating product */
  const productsMap = new Map(
    productsItem.map((product) => [product.id, product])
  );
  const products = [...productsMap.values()];
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const retakeQuiz = () => {
    localStorage.setItem('progress', 0);
    localStorage.removeItem('products');
    localStorage.removeItem('likedProducts');
    navigate('/question-one');
  };

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='results-content'>
      <div className='lemons__image'>
        <img
          src={resultsImage}
          alt='image'
        />
      </div>
      <div className='results-heading'>
        <h1>Build you everyday self care routine.</h1>
        <h2>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </h2>
        <button
          onClick={retakeQuiz}
          className='retake-btn'
        >
          Retake quiz
        </button>
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
        <div className='products-pagination'>
          <div className='products'>
            {currentPosts.map((product) => (
              <div
                className='product'
                key={product.id}
              >
                <img
                  src={product.images[0].src}
                  alt='product-image'
                />
                <span className='heart'>
                  <HeartComponent product={product} />
                </span>

                <div className='info'>
                  <h3>{product?.title}</h3>
                  <p>${product.variants[0].price}</p>
                </div>
              </div>
            ))}
          </div>

          <span className='pagination'>
            <Pagination
              productsPerPage={2}
              totalProducts={products}
              handlePagination={handlePagination}
              currentPage={currentPage}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
