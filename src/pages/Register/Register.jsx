import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaImage,
  FaUserAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import img from '../../assets/banner/7.jpg';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';
import useAxiosSec from '../../Hooks/useAxiosSec';

const Register = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [nameErr, setNameErr] = useState(null);
  const [imgErr, setImgErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);
  const axiosSecu = useAxiosSec();

  // Firebase data
  const {
    emlPassRegister,
    gitHubLogin,
    googleLogin,
    // logOutAcc,
    userDta,
    profileUpdate,
    setLoading,
    isLoading,
  } = useContext(ContextAuth);

  // Naviget, login done then go to Login
  const naviget = useNavigate();

  useEffect(() => {
    if (userDta) {
      naviget('/');
      console.log('Register to home');
    }
  }, [userDta, naviget]);

  // const [imgNam, setImgNam] = useState({});
  const handleSignUpSubmit = (e) => {
    setNameErr(null);
    setImgErr(null);
    setEmailErr(null);
    setPassErr(null);
    setConfPassErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const name = formDta.get('name');
    const photo = formDta.get('img');
    // setImgNam({ nam: name, pic: photo });
    const email = formDta.get('email');
    const pass = formDta.get('password');
    const confPass = formDta.get('confirmPass');
    // console.log(name, photo, imgNam, email, pass, confPass);

    if (name.length < 2) {
      setNameErr('Please enter your valid name.');
      return;
    } else if (photo.length < 10) {
      setImgErr('Please enter your valid photo.');
      return;
    } else if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (!isValidPass.test(pass)) {
      setPassErr('Please input Uppercase, Lowercase and at least 6 digits.');
      return;
    } else if (pass !== confPass) {
      setConfPassErr('Password is not matched.');
      return;
    }
    // Email password Register
    emlPassRegister(email, pass)
      .then((res) => {
        const user = res.user;
        const jwtRequet = async () => {
          const { data } = await axiosSecu.post(`/jwt`, {
            email: user?.email,
          });
          console.log('JWT Token,', data);
        };
        jwtRequet();
        // Update Profile
        profileUpdate(name, photo)
          .then(() => {
            Swal.fire({
              title: 'Good job!',
              text: 'Your account has been successfully created. Please login now.',
              icon: 'success',
            });
            naviget(location?.state ? location.state : '/');
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            Swal.fire({
              title: 'Oops...!',
              text: 'Sorry, your account could not be Created !',
              icon: 'error',
            });
          });
        // logOutAcc();
        // naviget('/login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be Created !',
          icon: 'error',
        });
      });
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    socialLogin()
      .then((result) => {
        const user = result.user;
        const jwtRequet = async () => {
          const { data } = await axiosSecu.post(`/jwt`, {
            email: user?.email,
          });
          console.log('JWT Token,', data);
        };
        jwtRequet();

        naviget(location?.state ? location.state : '/');
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };

  if (userDta || isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="h-28 sm:h-36"></div>
        <div className="flex flex-col md:flex-row-reverse items-center md:w-11/12 lg:w-9/12 mx-auto border-mClr border-2 rounded gap-6 shadow-2xl">
          <div
            className="w-full md:w-1/2 h-72 sm:h-96 md:h-[615px] lg:h-[600px] bg-no-repeat bg-cover"
            style={{
              backgroundImage: 'url(' + img + ')',
              backgroundPosition: 'center',
            }}
          ></div>
          {/* login form */}
          <div className="w-full md:w-1/2 p-5">
            <form className="space-y-4" onSubmit={handleSignUpSubmit}>
              {/* Name Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      nameErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                {nameErr && (
                  <p className="text-sm text-red-500 italic pt-1">{nameErr}</p>
                )}
              </div>
              {/* Image Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <FaImage />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      imgErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Your Image URL"
                    name="img"
                  />
                </div>
                {imgErr && (
                  <p className="text-sm text-red-500 italic pt-1">{imgErr}</p>
                )}
              </div>
              {/* Email Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <MdEmail />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      emailErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
                {emailErr && (
                  <p className="text-sm text-red-500 italic pt-1">{emailErr}</p>
                )}
              </div>
              {/* Password Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <RiLockPasswordFill />
                  </div>
                  <input
                    type={eye ? 'text' : 'password'}
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      passErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Password"
                    name="password"
                  />
                  <div
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute top-1/2 -translate-y-1/2 right-3"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                {passErr && (
                  <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
                )}
              </div>
              {/* Confirm Password Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <TbPasswordFingerprint />
                  </div>
                  <input
                    type="password"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      confPassErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Confirm Password"
                    name="confirmPass"
                  />
                </div>
                {confPassErr && (
                  <p className="text-sm text-red-500 italic pt-1">
                    {confPassErr}
                  </p>
                )}
              </div>
              <p></p>
              <label>
                <input type="checkbox" /> I agree to the
                <Link to={'/privecy-policy'} className="text-mClr">
                  {' '}
                  Privacy Policy
                </Link>
              </label>
              <input
                // onClick={handeleNameImg}
                type="submit"
                value="Register"
                className="w-full py-2 px-4 rounded-md text-center text-white hover:text-mClr font-bold bg-mClr active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-mClr"
              />
            </form>
            <p className="pt-3">
              Already have an account?{' '}
              <Link to={'/login'} className="underline text-mClr">
                Login
              </Link>
            </p>
            <div className="divider before:bg-mClr after:bg-mClr divider-secondary">
              Or
            </div>
            <div className="flex flex-col lg:flex-row gap-3 w-full text-slate-900 dark:text-stone-100">
              <button
                onClick={() => socialLogin(googleLogin)}
                className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 border-mClr"
              >
                <span className=" text-2xl">
                  <FcGoogle />
                </span>
                Login With Google
              </button>
              <button
                onClick={() => socialLogin(gitHubLogin)}
                className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2 border-mClr"
              >
                <span className="text-black dark:text-white text-2xl">
                  <FaGithub />
                </span>
                Login With GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
