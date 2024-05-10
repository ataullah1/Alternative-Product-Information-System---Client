import { Link } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiMenuAddFill } from 'react-icons/ri';
import { HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
const Nav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme:dark)');
  const moods = [
    {
      icon: 'desktop-outline',
      text: 'system',
    },
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark',
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme, element.classList]);
  darkQuery.addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

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
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute">
              <div className="group flex flex-col items-center justify-center w-max mx-auto">
                {/* + icon  */}
                <div className="flex justify-center w-10 h-10 bg-mainColor rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500 text-3xl">
                  <HiPlus />
                </div>
                {/* icon container  */}
                <div className=" text-white text-3xl duration-500 h-0 group-hover:my-4 group-hover:h-full bg-slate-800">
                  {/* Icon Map */}
                  {moods?.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setTheme(opt.text)}
                      className={`${
                        theme === opt.text && 'text-white bg-mainColor'
                      } w-10 h-10 flex items-center justify-center scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${
                        idx === 0
                          ? 'delay-[400ms] group-hover:delay-100'
                          : idx === 1
                          ? 'delay-300 group-hover:delay-200'
                          : idx === 2
                          ? 'delay-200 group-hover:delay-300'
                          : idx === 3
                          ? 'delay-100 group-hover:delay-[400ms]'
                          : 'delay-[400ms] group-hover:delay-100'
                      }`}
                    >
                      <ion-icon name={opt.icon}></ion-icon>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <Link className="block lg:hidden hover:bg-mClr py-1.5 hover:text-white font-semibold border-b bg-mainColor text-white">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
