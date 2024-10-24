import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useContext, useState } from 'react';
import ProductContext from '../../context/ProductContext';

function QuestionThree() {
  const navigate = useNavigate();
  const progressItem = JSON.parse(localStorage.getItem('progress'));
  const { allProducts, product, setProduct } = useContext(ProductContext);

  const filterProducts = (e) => {
    const answer = e.target.textContent.toLowerCase();

    if (
      answer === 'anti-breakage' ||
      answer === 'repairs appearance of damaged hair'
    ) {
      const optionOne = allProducts
        .get('Hair Treatment')
        .filter(
          (product) =>
            product.handle.includes('breakage') ||
            product.handle.includes('hydrate')
        );
      const optionTwo = allProducts
        .get('Hair Styling')
        .filter(
          (product) =>
            product.handle.includes('heat-protection') ||
            product.handle.includes('hydrate')
        );
      console.log(option, answer);
    } else if (answer === 'hydration') {
      const option = allProducts
        .get('Duo Packs')
        .filter((product) => product.handle.includes('hydrating'));

      console.log(option, answer);
    } else if (answer === 'soothing dry scalp') {
      const option = allProducts
        .get('Shampoo')
        .filter(
          (product) =>
            product.handle.includes('scalp') ||
            product.handle.includes('hydrating')
        );

      console.log(option, answer);
    } else if (answer === 'volume') {
      const optionOne = allProducts
        .get('Duo Packs')
        .filter((product) => product.handle.includes('volume'));

      const optionTwo = allProducts
        .get('Hair Styling')
        .filter((product) => product.handle.includes('volumising'));

      console.log(optionOne, optionTwo);
    } else {
      const option = allProducts
        .get('Hair Styling')
        .filter((product) => product.handle.includes('curl'));
      console.log(option, answer);
    }
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What benefit do you look for in your hair products?</h1>
        <ul className='answers'>
          <li onClick={(e) => filterProducts(e)}>Anti-breakage</li>
          <li onClick={(e) => filterProducts(e)}>Hydration</li>
          <li onClick={(e) => filterProducts(e)}>Soothing dry scalp</li>
          <li onClick={(e) => filterProducts(e)}>
            Repairs appearance of damaged hair
          </li>
          <li onClick={(e) => filterProducts(e)}>Volume</li>
          <li onClick={(e) => filterProducts(e)}>Curl and coil enhancing</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, -1)}
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
