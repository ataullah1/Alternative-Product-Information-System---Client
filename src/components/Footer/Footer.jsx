import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../assets/finalLogo.png';

const Footer = () => {
  const subscribe = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You have successfully subscribed.',
      icon: 'success',
    });
  };
  return (
    <footer className="text-[#8A99B3] mt-5">
      <div className=" bg-[#24324A]">
        <div className="w-11/12 max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-8 sm:gap-3 xl:gap-5 py-16">
          <div className="lg:col-span-2">
            <img className="max-h-16 mb-4" src={logo} alt="" />
            <p>
              AltQuery Empowering users to discover better alternatives. Share,
              explore, and recommend products effortlessly. Customize your
              viewing experience. Privacy and control with secure login and data
              management.
            </p>
          </div>

          <div className="">
            <h1 className="font-bold text-2xl text-white pb-5">Pages</h1>
            <div className="flex flex-col gap-3">
              <Link
                to={'/blog'}
                className="hover:text-white hover:translate-x-2 duration-200"
              >
                Privacy Policy
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                Terms & Conditions
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                User’s Guide
              </Link>
              <Link
                to={'/blog'}
                className="hover:text-white hover:translate-x-2 duration-200"
              >
                Help Center
              </Link>
              <Link
                to={'/blog'}
                className="hover:text-white hover:translate-x-2 duration-200"
              >
                System
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-white pb-5">Quick Links</h1>
            <div className="flex flex-col gap-3">
              <Link
                to={'/blog'}
                className="hover:text-white hover:translate-x-2 duration-200"
              >
                Privacy Policy
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                Terms & Conditions
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                User’s Guide
              </Link>
              <Link
                to={'/blog'}
                className="hover:text-white hover:translate-x-2 duration-200"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="font-bold text-2xl text-white pb-5">Follow us</h1>
            <div className="flex flex-row items-center gap-4 text-3xl">
              <a
                href="https://www.facebook.com/ataullah0"
                target="_blank"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/dev_ataullah"
                target="_blank"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://github.com/ataullah1"
                target="_blank"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ataullah/"
                target="_blank"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ataullah.info/"
                target="_blank"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsInstagram />
              </a>
            </div>
            <h1 className="font-semibold text-xl text-white pb-4 pt-10">
              Subscribe
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-2/3 py-3 outline-none rounded-l-full rounded-r-full sm:rounded-r-none bg-[#354765] px-5 text-white"
              />
              <button
                className="w-full sm:w-1/3 py-2 text-white border-secondColor border-2 bg-transparent hover:bg-firstColor sm:rounded-l-none rounded-l-full rounded-r-full active:bg-transparent duration-200 font-semibold"
                onClick={subscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1D293E]">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-3 text-center justify-between py-6">
          <div className="flex items-center gap-1 sm:gap-3 justify-center">
            <Link className="hover:text-white" to={'/'}>
              Home
            </Link>
            <div className="h-6 w-[1px] bg-white"></div>
            <Link className="hover:text-white" to={'/all-art-craft-items'}>
              All Art Items
            </Link>

            <div className="h-6 w-[1px] bg-white"></div>
            <Link className="hover:text-white" to={'/add-craft-item'}>
              Add Art Item
            </Link>
            <div className="h-6 w-[1px] bg-white"></div>
            <Link className="hover:text-white" to={'/my-art-craft-list'}>
              My Art list
            </Link>
          </div>
          <p>
            Copyright © 2024 - All right reserved by{' '}
            <a
              href="https://www.linkedin.com/in/md-ataullah/"
              className="text-secondColor italic font-medium tracking-wide hover:text-white"
            >
              Md Ataullah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
