import './style.sass'
import Button from '../../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../../context'
import Icon from '../../ui/Icon'

const links = ({ me, onLogout }) => [
	{
		route: 'about',
		visible: () => true,
		render: () => <Link to='about'>O nama</Link>,
	},
	{
		route: 'articles',
		visible: () => true,
		render: () => <Link to='articles'>Pregled artikala</Link>,
	},
	{
		route: 'profile',
		visible: () => me?.role === 'user',
		render: () => <Link to='profile'>Moj profil</Link>,
	},
	{
		route: 'notifications',
		visible: () => me?.role === 'user',
		render: () => <div className='Header__nofification'>{me?.notifications?.filter(s => !s.seen).length}</div>,
	},
	{
		route: 'notifications',
		visible: () => me?.role === 'user',
		render: () => (
			<Link to='cart'>
				<Icon style={{ marginBottom: '-4px' }} width='32' height='32' name='cart' />
			</Link>
		),
	},
	{
		route: 'login',
		visible: () => !me,
		render: () => <Button to='login'>Prijava</Button>,
	},
	{
		route: 'logout',
		visible: () => !!me,
		render: () => (
			<Button white onClick={onLogout}>
				Odjava
			</Button>
		),
	},
]

const Header = () => {
	const { state, setState } = useContext(AppContext)

	const navigate = useNavigate()
	const onLogout = () => {
		setState({ loggedInUser: null })
		navigate('/login')
	}

	return (
		<div className='Header'>
			<div onClick={() => navigate('/')} className='Header__logo'>
				Slatkomir
			</div>
			<div className='Header__links'>
				{links({ me: state.me, onLogout })
					.filter(l => l.visible())
					.map(l => l.render())}
			</div>
		</div>
	)
}

export default Header
