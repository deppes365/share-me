// Utilities
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Studio from "./pages/Studio";
import NotFound from "./pages/NotFound";

// Layouts
import Navbar from "./layouts/Navbar";

// Components
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App bg-white relative h-auto min-h-[100dvh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/studio"
          element={
            <PrivateRoute>
              <Studio />
            </PrivateRoute>
          }
        />

        <Route path="/:username" element={<User />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
