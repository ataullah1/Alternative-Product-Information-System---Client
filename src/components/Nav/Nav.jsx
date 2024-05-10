import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/finalLogo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiMenuAddFill } from 'react-icons/ri';
import { HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
const Nav = () => {
  // Dark mood Light mood implement
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
          <img src={logo} alt="" className="h-12 md:h-16" />
        </div>
        <ul className="hidden md:flex items-center justify-around gap-3 mx-auto">
          <NavLink
            className="border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            className="border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            Queries
          </NavLink>
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

            <div className="invisible absolute z-50 flex w-60 flex-col bg-gray-100 shadow-4xl group-hover:visible text-center dropdownMenu">
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
          <NavLink
            className="hidden lg:block border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            About Us
          </NavLink>
          <NavLink
            className="hidden lg:block border-2 w-24 py-1.5 text-center text-white hover:border-mainColor duration-200"
            to={'/about'}
          >
            Contact
          </NavLink>
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute text-white">
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
            <button className="hover:-skew-x-12 duration-500 py-2 w-28 text-lg bg-mainColor text-white font-bold">
              Login
            </button>
          </Link>
        </div>

        {/* Responsive  */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="relative w-8 h-8">
            <div className="absolute text-white">
              <div className="group flex flex-col items-center justify-center w-max mx-auto">
                {/* + icon  */}
                <div className="flex justify-center w-8 h-8 bg-mainColor rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500 text-2xl">
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
