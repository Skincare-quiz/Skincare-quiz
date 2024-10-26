import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionFive() {
  const navigate = useNavigate();
  const progressItem = JSON.parse(localStorage.getItem('progress'));
  const currentProducts = JSON.parse(localStorage.getItem('products'));
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { allProducts } = useContext(ProductContext);

  const filterProducts = (e) => {
    const answer = e.target.textContent.toLowerCase();
    let optionOne = '';
    let optionTwo = '';
    setSelectedAnswer(answer);

    switch (answer) {
      case 'blonde':
        optionOne = allProducts
          .get('Shampoo')
          .filter((product) => product.handle.includes('blonde'));
        optionTwo = allProducts
          .get('Duo Packs')
          .filter((product) => product.handle.includes('blonde'));
        break;

      default:
        optionOne = allProducts
          .get('Conditioner')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('goals_hydrate'))
          );
        break;
    }

    const products = [...optionOne, ...optionTwo, ...currentProducts];
    localStorage.setItem('products', JSON.stringify(products));
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What is your natural hair color(s) today?</h1>
        <ul className='answers'>
          <li
            className={selectedAnswer === 'black' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Black
          </li>
          <li
            className={selectedAnswer === 'brown' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Brown
          </li>
          <li
            className={selectedAnswer === 'blonde' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Blonde
          </li>
          <li
            className={selectedAnswer === 'red/orange' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Red/Orange
          </li>
          <li
            className={selectedAnswer === 'silver/grey' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Silver/Grey
          </li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, -1, currentProducts)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => setItem(navigate, '/results')}
            className='question-btn btn'
          >
            Next question
          </button>
        </div>
      </div>
      <span className='progress'>
        <p>{progressItem}/5</p>
      </span>
    </div>
  );
}

export default QuestionFive;
