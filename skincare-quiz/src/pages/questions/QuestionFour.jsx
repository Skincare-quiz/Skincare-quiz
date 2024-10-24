import { useNavigate } from 'react-router-dom';
import { removeItem, setItem } from '../../functions/updateLocalStorage';

function QuestionFour() {
  const navigate = useNavigate();
  const progressItem = JSON.parse(localStorage.getItem('progress'));

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>Is there anything troubling you about your hair?</h1>
        <ul className='answers'>
          <li>Breakage</li>
          <li>Frizz</li>
          <li>Scalp dryness</li>
          <li>Damage</li>
          <li>Tangling</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => removeItem(navigate, -1)}
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
