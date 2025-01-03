import './home.css';
import homeImage from '../../assets/home-page-image.jpg';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='home-content'>
      <img
        src={homeImage}
        alt='poster'
      />
      <div className='headings'>
        <h1>Build a self care routine suitable for you</h1>
        <p>
          Take out test to get a personalized self care routine based on your
          needs.
        </p>
        <button
          onClick={() => navigate('/question-one')}
          className='home-btn btn'
        >
          Start the quiz
        </button>
      </div>
    </div>
  );
}

export default HomePage;
