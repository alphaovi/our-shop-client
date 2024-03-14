import { createContext, useEffect, useState } from "react";
import app from "../../../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();


  // sign up with email and password

  const SignUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };


  // signin with email
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }


  // google sign in button control here
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        setUser(currentUser);

      }).catch((error) => {
        console.log(error);
      });

  }


  // sign out

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // values which are going using context api
  const authInfo = {
    user,
    setUser,
    loading,
    googleSignIn,
    SignUpWithEmail,
    signInWithEmail,
    logOut
  };


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;