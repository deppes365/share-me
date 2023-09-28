// Styles

// Utilities
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Studio from "./pages/Studio";
import NotFound from "./pages/NotFound";
// Layouts
import Navbar from "./layouts/Navbar";
import { useEffect, useState } from "react";

// Components
import PrivateRoute from "./components/PrivateRoute";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const location = useLocation();

  const [showNav, setShowNav] = useState(true);

  

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return setShowNav(false);
    }

    !showNav && setShowNav(true);
  }, [location.pathname]);

  return (
    <div className="App bg-white relative h-auto min-h-[100dvh]">
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Needs private route */}

        <Route
          path="/studio"
          element={
            <PrivateRoute>
              <Studio />
            </PrivateRoute>
          }
        />

        <Route path="/:username" element={<User setShowNav={setShowNav} />} />
        <Route
          path="/not-found"
          element={<NotFound setShowNav={setShowNav} />}
        />
      </Routes>
    </div>
  );
}

export default App;
