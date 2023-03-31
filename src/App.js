import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyCarousel from './components/MyCarousel';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import UnderNav from './components/UnderNav';
import MyForm from './components/MyForm';

function App() {
  const starTrek = "star%20trek"
  const marvelUniverse = "marvel"
  const starWars = "star%20wars"

  return (
    <div className="App">
      <MyNav />
      <UnderNav />
      <MyCarousel mySaga={starTrek} name="Star Trek" className="text-white" />
      <MyCarousel mySaga={marvelUniverse} name="Marvel Universe" />
      <MyCarousel mySaga={starWars} name="Star Wars" />
      <MyFooter />
    </div>
  );
}

export default App;