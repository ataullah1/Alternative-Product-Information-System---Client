import Banner from '../../components/Banner/Banner';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';
import PopulerQuery from '../../components/PopulerQuery/PopulerQuery';
import ResentQuerys from '../../components/Querys/ResentQuerys';
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto max-w-[1700px]">
        <PopulerQuery />
        <ResentQuerys />
      </div>
      <MiddleBanner />
      <div className="w-11/12 mx-auto max-w-[1700px]">
        <LatestBlogs />
      </div>
    </div>
  );
};
export default Home;
