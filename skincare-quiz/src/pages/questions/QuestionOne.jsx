import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionOne() {
  const navigate = useNavigate();
  const currentProducts = JSON.parse(localStorage.getItem('products'));
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { allProducts } = useContext(ProductContext);

  const filterProducts = (e) => {
    const answer = e.target.textContent.toLowerCase();
    setSelectedAnswer(answer);

    const option = allProducts
      .get('Hair Styling')
      .filter((product) => product.tags.some((tag) => tag.includes(answer)));

    if (option) {
      localStorage.setItem('products', JSON.stringify(option));
    }
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What's your hair type or texture?</h1>
        <ul className='answers'>
          <li
            className={selectedAnswer === 'straight' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Straight
          </li>
          <li
            className={selectedAnswer === 'curly' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Curly
          </li>
          <li
            className={selectedAnswer === 'wavy' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Wavy
          </li>
          <li
            className={selectedAnswer === 'fine' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Fine
          </li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, '/home', currentProducts)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => setItem(navigate, '/question-two')}
            className='question-btn btn'
          >
            Next question
          </button>
        </div>
      </div>
      <span className='progress'>
        <p>1/5</p>
      </span>
    </div>
  );
}

export default QuestionOne;
