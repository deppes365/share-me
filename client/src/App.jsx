// Styles

// Utilities
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';
// Layouts
import Navbar from './layouts/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      return setShowNav(false);
    }

    !showNav && setShowNav(true);
  }, [location.pathname]);

  return (
    <div className="App bg-stone-100 relative h-screen">
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
		<Route path='/:slug' element={<User setShowNav={setShowNav} />} />
      </Routes>
    </div>
  );
}

export default App;
