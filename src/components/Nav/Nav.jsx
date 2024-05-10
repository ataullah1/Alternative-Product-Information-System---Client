import { Link } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full bg-[#00000039] py-2">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <ul className="flex items-center justify-around mx-auto">
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
            Recommendations For Me
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/about'}
          >
            My Queries
          </Link>
          <Link
            className="py-2 px-3 bg-slate-800 text-white rounded-md"
            to={'/about'}
          >
            My recommendations
          </Link>

          <div className="group relative cursor-pointer py-2">
            <div className="flex items-center justify-between py-2 px-3 bg-slate-800 text-white rounded-md">
              <a
                className="menu-hover text-base font-medium text-white lg:mx-4"
                onClick={() => {}}
              >
                Choose Day
              </a>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Sunday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
              </a>
            </div>
          </div>
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
