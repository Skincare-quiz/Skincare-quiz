import { useNavigate } from 'react-router-dom';

function QuestionFive() {
  const navigate = useNavigate();

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
            onClick={() => navigate(-1)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/results')}
            className='question-btn btn'
          >
            Discover your results
          </button>
        </div>
      </div>
      <span className='progress'>
        <p>1/5</p>
      </span>
    </div>
  );
}

export default QuestionFive;
