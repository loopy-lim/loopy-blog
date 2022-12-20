import HomeComponent from '../Components/Home/Home.component';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <div className="h-fit">
      <NavBar />
      <HomeComponent />
    </div>
  );
};

export default Home;
