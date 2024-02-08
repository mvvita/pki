import './style.sass'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { useAppState } from './appState'
import AppContext from './context'
import AlertBox from './components/AlertBox'
import { useRef, useState } from 'react'

const App = props => {
	const { state, setState } = useAppState()
	const [alertMessage, setAlertMessage] = useState({})
	const alertTimeout = useRef(null)

	const setErrorAlertMessage = message => {
		setAlertMessage({
			fail: true,
			message,
		})

		setAlertHideTimeout()
	}

	const setSuccessAlertMessage = message => {
		setAlertMessage({
			success: true,
			message,
		})

		setAlertHideTimeout()
	}

	const setAlertHideTimeout = () => {
		if (!!alertTimeout.current) clearTimeout(alertTimeout.current)

		alertTimeout.current = setTimeout(() => setAlertMessage({}), 3000)
	}

	return (
		<div className='App'>
			<AppContext.Provider value={{ state, setState, setSuccessAlertMessage, setErrorAlertMessage }}>
				<Header />
				<div className='App__content'>
					<Outlet {...props} />
					<Footer />
				</div>
				<AlertBox {...alertMessage} />
			</AppContext.Provider>
		</div>
	)
}

export default App
