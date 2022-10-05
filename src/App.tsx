//React imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Assets imports
import './assets/css/App.css';
//Components imports
import Home from './pages/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

enum NavLinks {
	Inicio,
	Foro,
	About,
	Coaching,
}

function App() {
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
