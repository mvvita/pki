import './style.sass'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { useAppState } from './appState'
import AppContext from './context'

const App = props => {
	const { state, setState } = useAppState()

	return (
		<div className='App'>
			<AppContext.Provider value={{ state, setState }}>
				<Header />
				<div className='App__content'>
					<Outlet {...props} />
					<Footer />
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App
