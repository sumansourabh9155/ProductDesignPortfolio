import LandingPage from './resource/page/LandingPage.jsx'
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div >
      <LandingPage />
    </div>
  );
}

export default App;
