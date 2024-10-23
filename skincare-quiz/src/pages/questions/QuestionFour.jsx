import { useNavigate } from 'react-router-dom';

function QuestionFour() {
  const navigate = useNavigate();

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
            onClick={() => navigate(-1)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/question-five')}
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

export default QuestionFour;
