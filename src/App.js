import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import UnderNav from './components/UnderNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShows from './components/TvShows';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
function App() {
  const starTrek = "star%20trek";
  const marvelUniverse = "marvel";
  const starWars = "star%20wars";

  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <UnderNav />
        <Routes>
          <Route path='/tv-shows' element={<TvShows mySaga={starWars} name="Star Wars" />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;