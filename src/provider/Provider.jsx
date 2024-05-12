import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import axios from 'axios';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [userDta, setUserDta] = useState(null);
  // Register User
  const emlPassRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  emlPassLogin
  const emlPassLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============= Social Login ============
  // social login provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // Logout account
  const logOutAcc = () => {
    axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    // console.log('JWT logout Token,', data);
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          title: 'Logged Out',
          text: 'Your account has been successfully logged out.',
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDta(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const profileUpdate = (nam, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: nam,
      photoURL: photoUrl,
    });
  };
  const handleUpdateEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  const authDta = {
    emlPassRegister,
    emlPassLogin,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
    isLoading,
    setLoading,
    profileUpdate,
    handleUpdateEmail,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
