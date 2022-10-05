import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { useState } from 'react';

enum NavLinks {
	Inicio,
	Foro,
	About,
	Coaching,
}

interface Props {
	ActiveNavLink: NavLinks;
}

function App() {
	const [navLinkIsActive, setNavLinkIsActive] = useState();
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Navbar ActiveNavLink={NavLinks.Inicio} />
								<Home />
								<Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
