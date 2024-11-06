import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { register, login, logout } from "./AuthSlice";

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (response) {
      await updateProfile(auth.currentUser, {
        displayName: 'Sebastian',
        photoURL: ''
      });

      const { email } = response.user;
      dispatch(register({ email }));
    } else {
      throw new Error('Registro fallido');
    }
  };
};

export const loginAuth = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {
        const { email, uid, displayName, photoURL } = response.user;
        dispatch(login({ email, uid, displayName, photoUrl: photoURL }));
      }
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
      console.error("Login fallido:", error.message);
    }
  };
};

export const loginWithGoogle = () => {
  return async (dispatch) => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      const { email, uid, displayName, photoURL } = response.user;
      dispatch(login({ email, uid, displayName, photoUrl: photoURL }));
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
      console.error("Login con Google fallido:", error.message);
    }
  };
};

export const logoutAuth = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Logout fallido:", error.message);
    }
  };
};