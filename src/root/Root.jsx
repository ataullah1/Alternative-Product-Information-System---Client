import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useContext } from 'react';
// import { ContextAuth } from '../provider/Provider';
// import Loding from '../pages/Loding/Loding';
AOS.init();

const Root = () => {
  // const { isLoading } = useContext(ContextAuth);
  // if (isLoading) {
  //   return <Loding />;
  // }
  return (
    <div className="bg-white dark:bg-[#353b48] overflow-x-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
