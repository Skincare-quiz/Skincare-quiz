import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionOne() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const { allProducts, product, setProduct } = useContext(ProductContext);

  const filterProducts = (e) => {
    const answer = e.target.textContent.toLowerCase();
    console.log(answer);

    const option = allProducts
      .get('Hair Styling')
      .filter((product) => product.tags.some((tag) => tag.includes(answer)));

    console.log(option);
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What's your hair type or texture?</h1>
        <ul className='answers'>
          <li onClick={(e) => filterProducts(e)}>Straight</li>
          <li onClick={(e) => filterProducts(e)}>Curly</li>
          <li onClick={(e) => filterProducts(e)}>Wavy</li>
          <li onClick={(e) => filterProducts(e)}>Fine</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, '/home')}
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
