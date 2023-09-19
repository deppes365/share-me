// Styles

// Utilities
import { Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
// Layouts
import Navbar from './layouts/Navbar';

function App() {
	return (
		<div className="App bg-stone-100 relative">
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
