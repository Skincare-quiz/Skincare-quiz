function QuestionTwo() {
  return (
    <div className='question-block'>
      <h1>How often do you wash your hair?</h1>
      <span className='progress'>
        <p>1/5</p>
      </span>
      <ul className='answers'>
        <li>Daily</li>
        <li>Every other day</li>
        <li>Twice a week</li>
        <li>Once a week</li>
        <li>Every two weeks</li>
      </ul>
      <div className='buttons'>
        <button className='back-btn'>Back</button>
        <button className='btn'>Next question</button>
      </div>
    </div>
  );
}

export default QuestionTwo;
