import { useNavigate } from 'react-router-dom';

function QuestionTwo() {
  const navigate = useNavigate();

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>How often do you wash your hair?</h1>

        <ul className='answers'>
          <li>Daily</li>
          <li>Every other day</li>
          <li>Twice a week</li>
          <li>Once a week</li>
          <li>Every two weeks</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => navigate(-1)}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/question-three')}
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

export default QuestionTwo;
