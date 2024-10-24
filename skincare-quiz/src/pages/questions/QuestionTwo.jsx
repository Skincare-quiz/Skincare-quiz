import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';
import { useState } from 'react';

function QuestionTwo() {
  const navigate = useNavigate();
  const progressItem = JSON.parse(localStorage.getItem('progress'));
  const currentProducts = JSON.parse(localStorage.getItem('products'));
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleClick = (e) => {
    const answer = e.target.textContent.toLowerCase();
    setSelectedAnswer(answer);
  };

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>How often do you wash your hair?</h1>
        <ul className='answers'>
          <li
            className={selectedAnswer === 'daily' ? 'active' : ''}
            onClick={(e) => handleClick(e)}
          >
            Daily
          </li>
          <li
            className={selectedAnswer === 'every other day' ? 'active' : ''}
            onClick={(e) => handleClick(e)}
          >
            Every other day
          </li>
          <li
            className={selectedAnswer === 'twice a week' ? 'active' : ''}
            onClick={(e) => handleClick(e)}
          >
            Twice a week
          </li>
          <li
            className={selectedAnswer === 'once a week' ? 'active' : ''}
            onClick={(e) => handleClick(e)}
          >
            Once a week
          </li>
          <li
            className={selectedAnswer === 'every two weeks' ? 'active' : ''}
            onClick={(e) => handleClick(e)}
          >
            Every two weeks
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
            onClick={() => setItem(navigate, '/question-three')}
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

export default QuestionTwo;
