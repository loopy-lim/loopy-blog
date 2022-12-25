import PostHomeComponent from '../../Components/Home/PostHome.component';
import NavBarComponent from '../../Components/NavBar/NavBar.component';
import useSWR from 'swr';
import { fetcher } from '../../../utils/fetcher';

const Home = () => {
  const { data, error, isLoading } = useSWR('', fetcher);

  if (error) return <div> faild to load</div>;
  if (isLoading) return <div> loading...</div>;
  
  return (
    <div className="h-fit">
      <NavBarComponent isPlus={true} />
      <PostHomeComponent />
    </div>
  );
};

export default Home;
