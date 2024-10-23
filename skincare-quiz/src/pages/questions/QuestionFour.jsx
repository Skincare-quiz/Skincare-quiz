function QuestionFour() {
  return (
    <div className='question-block'>
      <h1>Is there anything troubling you about your hair?</h1>
      <span className='progress'>
        <p>1/5</p>
      </span>
      <ul className='answers'>
        <li>Breakage</li>
        <li>Frizz</li>
        <li>Scalp dryness</li>
        <li>Damage</li>
        <li>Tangling</li>
      </ul>
      <div className='buttons'>
        <button className='back-btn'>Back</button>
        <button className='btn'>Next question</button>
      </div>
    </div>
  );
}

export default QuestionFour;
