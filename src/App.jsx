import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './assets/styles/GlobalStyle.scss';
import './App.scss'

// ! Привести в порядок переменные в vars 
// TODO    Позиционировать title в header 
// todo    Позиционировать bg в header 

function App() {

	return (
		<div className='app'>
		<Header />
		<Main />
		<Footer />
		</div>
  )
}

export default App
