import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Videogames from './components/Videogames/Videogames';
import NewVideogame from './components/NewVideogame/NewVideogame';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/videogames" element={<Videogames/>}/>
          <Route exact path="/videogames/new" element={<NewVideogame/>}/>
          {/* edit route */}
        </Routes>
        </div>
      </Router>
  );
}

export default App;

