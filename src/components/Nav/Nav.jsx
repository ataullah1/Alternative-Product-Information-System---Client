import { Link } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full bg-[#00000039] py-2">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <ul className="max-w-[500px] flex items-center justify-around w-2/3 gap-12 mx-auto">
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/about'}
          >
            Queries
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/about'}
          >
            About
          </Link>
        </ul>
        <div>
          <Link to={'/login'}>
            <button className="py-2 w-24 bg-mainColor rounded-md text-white font-bold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
