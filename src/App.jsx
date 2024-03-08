import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './assets/styles/GlobalStyle.scss'
import './App.scss'

function App() {

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth)
		};
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		};
	}, [width]);

	return (
		<div className="app">
			<Header />
			<Main width={width} />
			<Footer />
		</div>
	)
}

export default App
