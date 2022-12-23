import PostHomeComponent from '../../Components/Home/PostHome.component';
import NavBarComponent from '../../Components/NavBar/NavBar.component';

const Home = () => {
  return (
    <div className="h-fit">
      <NavBarComponent isFixed={false} isWhite={false} />
      <PostHomeComponent />
    </div>
  );
};

export default Home;
