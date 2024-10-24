import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';

function QuestionFive() {
  const navigate = useNavigate();
  const progressItem = JSON.parse(localStorage.getItem('progress'));

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What is your natural hair color(s) today?</h1>
        <ul className='answers'>
          <li>Black</li>
          <li>Brown</li>
          <li>Blonde</li>
          <li>Red/Orange</li>
          <li>Silver/Grey</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, -1)}
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
