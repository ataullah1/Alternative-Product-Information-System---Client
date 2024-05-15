import Banner from '../../components/Banner/Banner';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import ResentQuerys from '../../components/Querys/ResentQuerys';
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <ResentQuerys />
        <LatestBlogs />
      </div>
    </div>
  );
};
export default Home;
