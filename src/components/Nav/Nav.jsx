import { Link } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
const Nav = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <ul className="flex items-center justify-around w-2/3 gap-12 mx-auto">
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
            About
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/login'}
          >
            Login
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/register'}
          >
            Register
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
