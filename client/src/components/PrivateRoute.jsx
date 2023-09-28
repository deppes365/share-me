import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

function PrivateRoute({ children }) {
  const {loggedIn, checkingStatus} = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
