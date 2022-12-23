import HomeComponent from '../../Components/Home/Home.component';
import NavBarComponent from '../../Components/NavBar/NavBar.component';

const Home = () => {
  return (
    <div className="h-fit">
      <NavBarComponent isAbsolute={false} isWhite={false} />
      <HomeComponent />
    </div>
  );
};

export default Home;
