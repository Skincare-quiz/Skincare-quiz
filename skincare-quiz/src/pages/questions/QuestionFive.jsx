function QuestionFive() {
  return (
    <div className='question-block'>
      <h1>What is your natural hair color(s) today?</h1>
      <span className='progress'>
        <p>1/5</p>
      </span>
      <ul className='answers'>
        <li>Black</li>
        <li>Brown</li>
        <li>Blonde</li>
        <li>Red/Orange</li>
        <li>Silver/Grey</li>
      </ul>
      <div className='buttons'>
        <button className='back-btn'>Back</button>
        <button className='btn'>Next question</button>
      </div>
    </div>
  );
}

export default QuestionFive;
