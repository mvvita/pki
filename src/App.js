import './style.sass'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const App = props => {
	return (
		<div className='App'>
			<Header />
			<div className='App__content'>
				<Outlet {...props} />
				<Footer />
			</div>
		</div>
	)
}

export default App
