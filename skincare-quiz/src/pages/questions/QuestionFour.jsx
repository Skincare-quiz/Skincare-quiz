import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionFour() {
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
      case 'breakage':
        optionOne = allProducts
          .get('Hair Treatment')
          .filter((product) =>
            product.tags.some(
              (tag) => tag.includes('strength') || tag.includes('hydrate')
            )
          );
        break;

      case 'frizz':
        optionOne = allProducts
          .get('Conditioner')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('frizz'))
          );
        optionTwo = allProducts
          .get('Hair Treatment')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('frizz'))
          );
        break;

      case 'scalp dryness':
        optionOne = allProducts
          .get('Duo Packs')
          .filter((product) => product.handle.includes('hydrating'));
        optionTwo = allProducts
          .get('Shampoo')
          .filter((product) => product.handle.includes('scalp'));
        break;

      case 'damage':
        optionOne = allProducts
          .get('Hair Treatment')
          .filter((products) =>
            products.tags.some((tag) => tag.includes('strength'))
          );
        optionTwo = allProducts
          .get('Hair Styling')
          .filter((products) =>
            products.tags.some((tag) => tag.includes('thermal'))
          );
        break;

      case 'tangling':
        optionOne = allProducts
          .get('Hair Styling')
          .filter((products) =>
            products.tags.some((tag) => tag.includes('straighten'))
          );
        break;
    }

    if (optionOne) {
      optionOne.forEach((option) => {
        currentProducts.push(option);
      });
      localStorage.setItem('products', JSON.stringify(currentProducts));
    }
    if (optionTwo) {
      optionTwo.forEach((option) => {
        currentProducts.push(option);
      });
      localStorage.setItem('products', JSON.stringify(currentProducts));
    }
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>Is there anything troubling you about your hair?</h1>
        <ul className='answers'>
          <li
            className={selectedAnswer === 'breakage' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Breakage
          </li>
          <li
            className={selectedAnswer === 'frizz' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Frizz
          </li>
          <li
            className={selectedAnswer === 'scalp dryness' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Scalp dryness
          </li>
          <li
            className={selectedAnswer === 'damage' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Damage
          </li>
          <li
            className={selectedAnswer === 'tangling' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Tangling
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
            onClick={() => setItem(navigate, '/question-five')}
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

export default QuestionFour;
