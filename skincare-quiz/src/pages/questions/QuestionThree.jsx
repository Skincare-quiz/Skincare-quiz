import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionThree() {
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
      case 'anti-breakage':
      case 'repairs appearance of damaged hair':
        optionOne = allProducts
          .get('Hair Treatment')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('hydrate'))
          );
        optionTwo = allProducts
          .get('Hair Styling')
          .filter((product) =>
            product.tags.some(
              (tag) =>
                tag.includes('thermal protection') || tag.includes('hydrate')
            )
          );
        break;

      case 'hydration':
        optionOne = allProducts
          .get('Duo Packs')
          .filter((product) => product.handle.includes('hydrating'));
        break;

      case 'soothing dry scalp':
        optionOne = allProducts
          .get('Shampoo')
          .filter(
            (product) =>
              product.handle.includes('scalp') ||
              product.handle.includes('hydrating')
          );
        break;

      case 'volume':
        optionOne = allProducts
          .get('Duo Packs')
          .filter((product) => product.handle.includes('volume'));

        optionTwo = allProducts
          .get('Hair Styling')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('volumise'))
          );
        break;

      case 'curl and coil enhancing':
        optionOne = allProducts
          .get('Hair Styling')
          .filter((product) =>
            product.tags.some((tag) => tag.includes('curl'))
          );
        break;
    }

    const options = [...optionOne, ...optionTwo, ...currentProducts];
    localStorage.setItem('products', JSON.stringify(options));
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What benefit do you look for in your hair products?</h1>
        <ul className='answers'>
          <li
            className={selectedAnswer === 'anti-breakage' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Anti-breakage
          </li>
          <li
            className={selectedAnswer === 'hydration' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Hydration
          </li>
          <li
            className={selectedAnswer === 'soothing dry scalp' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Soothing dry scalp
          </li>
          <li
            className={
              selectedAnswer === 'repairs appearance of damaged hair'
                ? 'active'
                : ''
            }
            onClick={(e) => filterProducts(e)}
          >
            Repairs appearance of damaged hair
          </li>
          <li
            className={selectedAnswer === 'volume' ? 'active' : ''}
            onClick={(e) => filterProducts(e)}
          >
            Volume
          </li>
          <li
            className={
              selectedAnswer === 'curl and coil enhancing' ? 'active' : ''
            }
            onClick={(e) => filterProducts(e)}
          >
            Curl and coil enhancing
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
            onClick={() => setItem(navigate, '/question-four')}
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

export default QuestionThree;
