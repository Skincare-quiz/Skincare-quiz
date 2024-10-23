import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import QuestionOne from './pages/questions/QuestionOne';
import QuestionTwo from './pages/questions/QuestionTwo';
import QuestionThree from './pages/questions/QuestionThree';
import QuestionFour from './pages/questions/QuestionFour';
import QuestionFive from './pages/questions/QuestionFive';
import ResultsPage from './pages/results/ResultsPage';

function App() {
  return (
    <Routes>
      <Route
        path='/home'
        Component={HomePage}
      />
      <Route
        path='/question-one'
        Component={QuestionOne}
      />
      <Route
        path='/question-two'
        Component={QuestionTwo}
      />
      <Route
        path='/question-three'
        Component={QuestionThree}
      />
      <Route
        path='/question-four'
        Component={QuestionFour}
      />
      <Route
        path='/question-five'
        Component={QuestionFive}
      />
      <Route
        path='/results'
        Component={ResultsPage}
      />
    </Routes>
  );
}

export default App;
