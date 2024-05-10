import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

const Root = () => {
  return (
    <div className="bg-white dark:bg-[#353b48]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
