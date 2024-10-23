function QuestionThree() {
  return (
    <div className='question-block'>
      <h1>What benefit do you look for in your hair products?</h1>
      <span className='progress'>
        <p>1/5</p>
      </span>
      <ul className='answers'>
        <li>Anti-breakage</li>
        <li>Hydration</li>
        <li>Soothing dry scalp</li>
        <li>Repairs appearance of damaged hair</li>
        <li>Volume</li>
        <li>Curl and coil enhancing</li>
      </ul>
      <div className='buttons'>
        <button className='back-btn'>Back</button>
        <button className='btn'>Next question</button>
      </div>
    </div>
  );
}

export default QuestionThree;
