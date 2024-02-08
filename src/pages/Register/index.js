import './style.sass'
import { Link, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context'
import ErrorMessage from '../../ui/ErrorMessage'

const Register = () => {
	const { state, setState, setSuccessAlertMessage } = useContext(AppContext)
	const navigate = useNavigate()
	const location = useLocation()

	const [error, setError] = useState([])
	const [form, setForm] = useState({
		name: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		username: '',
		password: '',
		passwordConfirmation: '',
	})

	const isEdit = location?.pathname?.includes('edit')

	useEffect(() => {
		if (isEdit && state.me?.id) {
			const newForm = {
				...Object.keys(state.me)
					.filter(k => form[k] === '')
					.reduce((acc, k) => ({ ...acc, [k]: state.me[k] }), {}),
			}

			newForm.passwordConfirmation = newForm.password
			setForm(newForm)
		}
	}, [isEdit, state.me])

	const updateField = e => {
		setForm(f => ({ ...f, [e.target.name]: e.target.value }))
	}

	const onSubmit = () => {
		const invalidKeys = Object.keys(form).filter(k => !form[k])
		const errors = invalidKeys.map(k => `Polje ${k} ne sme biti prazno.`)
		setError(errors)
		if (errors.length > 0) {
			return
		}

		if (form.password !== form.passwordConfirmation) {
			setError(['Lozinka se mora poklapati sa potvrdom lozinke.'])
			return
		}

		if (!isEdit && state.users.some(u => u.username === form.username && !state.me?.id)) {
			setError(['Vec postoji korisnik sa datim korisnickim imenom.'])
			return
		}

		const { passwordConfirmation: _, ...userFields } = form

		if (!isEdit) {
			const newUser = {
				...userFields,
				id: +new Date(),
				role: 'user',
				notifications: [],
				orders: [],
			}

			setState({ users: [...state.users, newUser], loggedInUser: newUser.id })
		} else {
			const updatedUser = {
				...state.me,
				...userFields,
			}

			setSuccessAlertMessage('Uspesno izmenjene informacije.')
			setState({ users: state.users.map(u => (u.id === state.me.id ? updatedUser : u)) })
		}

		navigate('/profile')
	}

	return (
		<div className='Register'>
			<div className='Register__form'>
				<h2 className='FormHeader'>{isEdit ? 'Izmena informacija' : 'Registracija'}</h2>
				<div className='FormLabel'>Ime</div>
				<Input name='name' fit value={form.name} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Prezime</div>
				<Input name='lastName' fit value={form.lastName} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Email</div>
				<Input name='email' fit value={form.email} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Kontakt telefon</div>
				<Input name='phone' fit value={form.phone} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Adresa</div>
				<Input name='address' fit value={form.address} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Korisnicko ime</div>
				<Input name='username' fit value={form.username} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Lozinka</div>
				<Input name='password' type='password' fit value={form.password} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Potvrda lozinke</div>
				<Input
					name='passwordConfirmation'
					type='password'
					fit
					value={form.passwordConfirmation}
					onChangeWithTarget={updateField}
				/>
				{!isEdit && (
					<div className='FormLabel u-mt-16'>
						Vec imate nalog? Možete se prijaviti{' '}
						<Link className='AppLink' to='/login'>
							ovde.
						</Link>
					</div>
				)}
				<ErrorMessage className='u-mt-16' messages={error} />
				<Button onClick={onSubmit} className='u-mt-16'>
					{isEdit ? 'Potvrdi' : 'Registracija'}
				</Button>
			</div>
		</div>
	)
}

export default Register
