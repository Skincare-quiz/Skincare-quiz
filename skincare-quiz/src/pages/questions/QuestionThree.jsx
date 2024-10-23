import { useNavigate } from 'react-router-dom';

function QuestionThree() {
  const navigate = useNavigate();

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What benefit do you look for in your hair products?</h1>
        <ul className='answers'>
          <li>Anti-breakage</li>
          <li>Hydration</li>
          <li>Soothing dry scalp</li>
          <li>Repairs appearance of damaged hair</li>
          <li>Volume</li>
          <li>Curl and coil enhancing</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => navigate(-1)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/question-four')}
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

export default QuestionThree;
