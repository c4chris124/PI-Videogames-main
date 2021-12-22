import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Videogames from './components/Videogames/Videogames';
import NewVideogame from './components/NewVideogame/NewVideogame';
import Header from './components/Header/Header';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className='container'>
        <Header/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/videogames" element={<Videogames/>}/>
          <Route exact path="/videogames/:id" element={<VideogameDetail/>}/>
          <Route exact path="/videogames/new" element={<NewVideogame/>}/>
          {/* edit route */}
        </Routes>
        </div>
      </Router>
  );
}

export default App;


