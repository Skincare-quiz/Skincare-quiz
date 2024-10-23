import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

function QuestionOne() {
  const navigate = useNavigate();

  return (
    <div className='question-block'>
      <div className='question'>
        <h1>What's your hair type or texture?</h1>
        <ul className='answers'>
          <li>Straight</li>
          <li>Curly</li>
          <li>Wavy</li>
          <li>Fine</li>
        </ul>
        <div className='buttons'>
          <button
            onClick={() => navigate('/home')}
            className='back-btn'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/question-two')}
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

export default QuestionOne;
