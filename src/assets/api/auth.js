import {
  signInWithEmailAndPassword as signIn,
  setPersistence,
  inMemoryPersistence,
  createUserWithEmailAndPassword as signUp,
  updateProfile,
  signOut,
  deleteUser,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const auth = FIREBASE_AUTH;

const login = (persist, email, password) =>
  persist
    ? signIn(auth, email, password)
    : setPersistence(auth, inMemoryPersistence).then(() =>
        signIn(auth, email, password)
      );

const register = (email, password, name) =>
  signUp(auth, email, password, name).then((test) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
    test.user.displayName = name;
  });

const logout = () => signOut(auth);

const deleteAccount = () => deleteUser(auth.currentUser);

const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export { login, register, logout, deleteAccount, resetPassword };
