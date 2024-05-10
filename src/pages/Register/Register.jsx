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

const Register = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);

  // Firebase data
  const {
    emlPassRegister,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
    profileUpdate,
    setReload,
    reload,
    setIsLoading,
    setRegisterDta,
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

    if (!isValidEmail.test(email)) {
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
      .then(() => {
        // Update Profile
        profileUpdate(name, photo)
          .then(() => {
            Swal.fire({
              title: 'Good job!',
              text: 'Your account has been successfully created. Please login now.',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
          });
        logOutAcc();
        setReload(!reload);
        setRegisterDta(false);

        naviget('/login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsLoading(false);
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
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
        naviget(location?.state ? location.state : '/');
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
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="h-28"></div>
        <div className="flex flex-col md:flex-row-reverse items-center md:w-11/12 lg:w-9/12 mx-auto border-mClr border-2 rounded gap-6 shadow-2xl">
          <div
            className="w-full md:w-1/2 h-72 sm:h-96 md:h-[600px]"
            style={{
              backgroundImage: 'url(' + img + ')',
              backgroundPosition: 'center',
            }}
          ></div>
          {/* login form */}
          <div className="w-full md:w-1/2 p-5">
            <form className="space-y-4" onSubmit={handleSignUpSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <FaUserAlt />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  required
                  placeholder="Your Name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaImage />
                <input
                  type="text"
                  className="grow"
                  name="img"
                  required
                  placeholder="Your Image URL"
                />
              </label>
              <div>
                <label
                  className={
                    emailErr
                      ? 'input input-bordered flex items-center gap-2 border-red-500'
                      : 'input input-bordered flex items-center gap-2'
                  }
                >
                  <MdEmail />
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                  />
                </label>
                {emailErr && (
                  <p className="text-sm text-red-500 italic pt-1">{emailErr}</p>
                )}
              </div>
              <div>
                <label
                  className={
                    passErr
                      ? 'relative input input-bordered flex items-center gap-2 border-red-500'
                      : 'relative input input-bordered flex items-center gap-2'
                  }
                >
                  <RiLockPasswordFill />
                  <input
                    type={eye ? 'text' : 'password'}
                    name="password"
                    className="grow"
                    required
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute right-3"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </label>
                {passErr && (
                  <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
                )}
              </div>
              <div>
                <label
                  className={
                    confPassErr
                      ? 'input input-bordered flex items-center gap-2 border-red-500'
                      : 'input input-bordered flex items-center gap-2'
                  }
                >
                  <TbPasswordFingerprint />
                  <input
                    type="password"
                    className="grow"
                    name="confirmPass"
                    placeholder="Confirm Password"
                  />
                </label>
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
