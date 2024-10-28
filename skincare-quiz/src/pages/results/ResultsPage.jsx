import './results.css';
import resultsImage from '../../assets/results-page-image.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeartComponent from '../../components/heart/HeartComponent';
import Pagination from '../../components/pagination/Pagination';

function ResultsPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleButton, setToggleButton] = useState(false);
  const indexOfLastPost = currentPage * 2;
  const indexOfFirstPost = indexOfLastPost - 2;
  const products = JSON.parse(localStorage.getItem('products')) || [];
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
          Retake the quiz
        </button>
      </div>
      <div className='results'>
        <div className='daily__routine'>
          <h2 className='routine-heading'>Daily routine</h2>
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
            {currentPage !== 1 && (
              <span
                className='paginate-btn'
                onClick={() => handlePagination(currentPage - 1)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 16 16'
                >
                  <path d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5' />
                </svg>
              </span>
            )}
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
                  <HeartComponent
                    product={product}
                    toggleButton={toggleButton}
                    setToggleButton={setToggleButton}
                  />
                </span>

                <div className='info'>
                  <h3>{product?.title}</h3>
                  <p>${product.variants[0].price}</p>
                </div>
              </div>
            ))}
            {currentPage !== Math.ceil(products.length / 2) && (
              <span
                className='paginate-btn'
                onClick={() => handlePagination(currentPage + 1)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 16 16'
                >
                  <path d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8' />
                </svg>
              </span>
            )}
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
