import { Link } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiMenuAddFill } from 'react-icons/ri';
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full bg-[#00000039] py-2">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <ul className="hidden md:flex items-center justify-around gap-3 mx-auto">
          <Link
            className="border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            Queries
          </Link>
          <div className="group relative cursor-pointer py-1.5 w-34">
            <div className="flex items-center justify-between pl-2 lg:pl-0 pr-2 border-2 w-full py-1.5 text-center text-white hover:border-mainColor duration-200">
              <a
                className="menu-hover text-base font-medium text-white lg:mx-4"
                onClick={() => {}}
              >
                Others Menu
              </a>
              <span className="text-2xl">
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-60 flex-col bg-gray-100 shadow-4xl group-hover:visible text-center">
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Recommendations For Me
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                My Queries
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                My recommendations
              </Link>
              <Link className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                About Us
              </Link>
              <Link className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Contact Us
              </Link>
            </div>
          </div>
          <Link
            className="hidden lg:block border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            About Us
          </Link>
          <Link
            className="hidden lg:block border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            Contact
          </Link>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-white">
            <span>
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </span>
            <span></span>
          </div>
          <Link to={'/login'}>
            <button className="py-2 w-28 text-lg bg-mainColor text-white font-bold">
              Login
            </button>
          </Link>
        </div>

        {/* Responsive  */}
        <div className="flex items-center md:hidden">
          <div className="text-white">
            <span>
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </span>
            <span></span>
          </div>
          <div className="group relative cursor-pointer py-1.5 w-34">
            <div className="flex items-center justify-between pl-2 lg:pl-0 pr-2 w-full py-1.5 text-center text-white duration-200">
              <a
                className="menu-hover text-3xl font-medium text-white lg:mx-4"
                onClick={() => {}}
              >
                <RiMenuAddFill />
              </a>
            </div>

            <div className="invisible right-0 absolute z-50 flex w-60 flex-col bg-gray-100 shadow-4xl group-hover:visible text-center">
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Home
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Queries
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Recommendations For Me
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                My Queries
              </Link>
              <Link className="text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                My recommendations
              </Link>
              <Link className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                About Us
              </Link>
              <Link className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
