function QuestionOne() {
  return (
    <div className='question-block'>
      <h1>What's your hair type or texture?</h1>
      <span className='progress'>
        <p>1/5</p>
      </span>
      <ul className='answers'>
        <li>Straight</li>
        <li>Curly</li>
        <li>Wavy</li>
        <li>Fine</li>
      </ul>
      <div className='buttons'>
        <button className='back-btn'>Back</button>
        <button className='btn'>Next question</button>
      </div>
    </div>
  );
}

export default QuestionOne;
