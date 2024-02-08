import { useState, useEffect } from 'react'
import { mockState } from './mockState'

const useAppState = () => {
	const [state, setState] = useState({
		users: [],
		promotions: [],
		orders: [],
		cakes: [],
		loggedInUser: null,
	})

	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const lsState = localStorage.getItem('_APP_STATE_')
		if (!lsState) {
			setState(mockState)
		} else {
			const { loggedInUser, ...rest } = JSON.parse(lsState)
			setState(rest)
		}

		setLoaded(true)
	}, [])

	useEffect(() => {
		if (!loaded) {
			return
		}

		localStorage.setItem('_APP_STATE_', JSON.stringify(state))
	}, [loaded, state])

	const getMe = () => {
		const me = state.users?.find(u => u.id === state.loggedInUser)
		if (!me) {
			return null
		}

		return { ...me, orders: state.orders.filter(u => u.userId === me.id) }
	}

	return {
		state: { ...state, me: getMe() },
		setState: ({ ...args }) => setState({ ...state, ...args }),
	}
}

export { useAppState }
