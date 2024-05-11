import Banner from '../../components/Banner/Banner';
import ResentQuerys from '../../components/Querys/ResentQuerys';
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <ResentQuerys />
      </div>
    </div>
  );
};
export default Home;
