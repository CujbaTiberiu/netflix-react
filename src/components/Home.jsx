import MyCarousel from "./MyCarousel";

const Home = () => {
  const starTrek = "star%20trek";
  const marvelUniverse = "marvel";
  const starWars = "star%20wars";
  return (
    <>
      <MyCarousel mySaga={starTrek} name="Star Trek" className="text-white" />
      <MyCarousel mySaga={marvelUniverse} name="Marvel Universe" />
      <MyCarousel mySaga={starWars} name="Star Wars" />
    </>
  );
};

export default Home;
