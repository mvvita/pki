import './style.sass'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useState } from 'react'
import AppContext from '../../context'
import ErrorMessage from '../../ui/ErrorMessage'

const Login = () => {
	const { state, setState } = useContext(AppContext)
	const [form, setForm] = useState({ username: '', password: '' })
	const [error, setError] = useState([])
	const navigate = useNavigate()

	const updateField = e => {
		setForm(f => ({ ...f, [e.target.name]: e.target.value }))
	}

	const onSubmit = () => {
		let errors = []

		if (!form.username) {
			errors.push('Unesite korisnicko ime')
		}

		if (!form.password) {
			errors.push('Unesite lozinku')
		}

		setError(errors)
		if (errors.length > 0) {
			return
		}

		const user = state.users.find(u => u.username === form.username && u.password === form.password)
		if (!user) {
			setError(['Pogresni kredencijali.'])
			return
		}

		setState({ loggedInUser: user.id })
		navigate('/articles')
	}

	return (
		<div className='Login'>
			<div className='Login__form'>
				<h2 className='FormHeader'>Prijava na sistem</h2>
				<div className='FormLabel'>Korisnicko ime</div>
				<Input name='username' fit value={form.username} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Lozinka</div>
				<Input name='password' type='password' fit value={form.password} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>
					Nemate nalog? Možete napraviti novi{' '}
					<Link className='AppLink' to='/register'>
						ovde.
					</Link>
				</div>
				<ErrorMessage className='u-mt-16' messages={error} />
				<Button onClick={onSubmit} className='u-mt-16'>
					Prijava
				</Button>
			</div>
		</div>
	)
}

export default Login
