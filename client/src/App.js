import React from 'react';
import styles from './App.module.css'
import LandingPage from './components/LandingPage/LandingPage';
import Videogames from './components/Videogames/Videogames';
import NewVideogame from './components/NewVideogame/NewVideogame';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className={styles.App}>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<LandingPage/> } />
          <Route path="/videogames" element={<Navbar/>, <Videogames/>} /> 
          <Route exact path="/videogames/:id" element={<VideogameDetail />} />
          <Route exact path="/videogames/new" element={<NewVideogame />} />
          {/* edit route */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;


