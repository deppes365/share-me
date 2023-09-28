import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import axios from "axios";

export const validatePassword = (str) => {
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNum = false;
  let hasSpecialChar = false;

  if (str.match(/[a-z]+/)) {
    hasLowercase = true;
  }
  if (str.match(/[A-Z]+/)) {
    hasUppercase = true;
  }
  if (str.match(/[0-9]+/)) {
    hasNum = true;
  }
  if (str.match(/[!@#$%^&*-]+/)) {
    hasSpecialChar = true;
  }

  return hasSpecialChar && hasNum && hasLowercase && hasUppercase;
};

export const registerUser = async (username, clientEmail, password) => {
  const error = {
    error: false,
    fieldInError: "",
    message: "",
  };

  const userData = {
    username: username,
    clientEmail: clientEmail,
    firebaseUID: "",
  };

  try {
    // check if username already exists in MongoDB
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/user/${username.toLowerCase()}`,
    );

    if (data?.username) {
      error.error = true;
      error.fieldInError = "username";
      error.message = "Username already already in use";

      return { error, userData };
    }

    //Check if password is strong enough
    if (!validatePassword(password)) {
      error.error = true;
      error.fieldInError = "password";
      error.message = "Password too weak";

      return { error, userData };
    }

    // Tries to create a new user
    const { user } = await createUserWithEmailAndPassword(
      auth,
      clientEmail,
      password,
    );

    const createdUser = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/user`,
      {
        username: username.toLowerCase(),
        email: user.email,
        firebaseUID: user.uid,
      },
    );



    userData.clientEmail = createdUser?.data.email;
    userData.username = createdUser?.data.username;
    userData.firebaseUID = createdUser?.data.firebaseUID;
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      error.error = true;
      error.fieldInError = "clientEmail";
      error.message = "Email already in use";

      return { error, userData };
    }
  }

  return { error, userData };
};

export const loginUser = async (usernameOrEmail, password) => {
  const error = {
    error: false,
    message: "",
  };

  let userData = null;

  let email = usernameOrEmail;
  console.log(email);
  try {
    if (!usernameOrEmail.includes("@")) {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/user/${usernameOrEmail.toLowerCase()}`,
      );

      if (data === "user not found") {
        error.error = true;
        error.message = "Invalid login credentials";

        return { error, userData };
      }

      email = data?.email;
    }

    console.log(email);
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (user?.uid) {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/user?firebaseUID=${user.uid}`,
      );

      userData = {
        ...data,
      };

      delete userData.__v;
      delete userData._id;

      return { error, userData };
    }
  } catch (err) {
    if (err.code === "auth/invalid-login-credentials") {
      error.error = true;
      error.message = "Invalid login credentials";

      userData = null;
    }

    if (err.code === "auth/too-many-requests") {
      error.error = true;
      error.message = "Too many requests, please reset password";

      userData = null;
    }
  }

  return { error, userData };
};
