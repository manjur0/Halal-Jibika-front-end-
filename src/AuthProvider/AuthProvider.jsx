import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";

const googlePorvider = new GoogleAuthProvider();
const githubPorvider = new GithubAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // google Login

  const googleLogin = () => {
    return signInWithPopup(auth, googlePorvider);
  };

  // gighub login
  const githubLogin = () => {
    return signInWithPopup(auth, githubPorvider);
  };

  // sign up with email and password
  const emailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // Provideer object
  const authentication = {
    googleLogin,
    githubLogin,
    emailAndPassword,
    loginEmailPassword,
    user,
    logOut,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
