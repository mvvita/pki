import './style.sass'
import Button from '../../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import AppContext from '../../context'
import Icon from '../../ui/Icon'
import cx from 'classnames'

const HeaderNotification = ({ me, notifications }) => {
	const { state, setState } = useContext(AppContext)

	const [visible, setVisible] = useState(false)

	const toggleNotifications = () => {
		if (visible) {
			setState({
				users: state.users.map(u =>
					u.id === me.id ? { ...u, notifications: u.notifications.map(n => ({ ...n, seen: true })) } : u,
				),
			})
		}
		setVisible(v => !v)
	}

	return (
		<div onClick={toggleNotifications} className='Header__notification'>
			{notifications?.filter(s => !s.seen).length}
			{visible && notifications?.length > 0 && (
				<div className='Header__notifications'>
					<div className='Header__notifications--header'>NOTIFIKACIJE</div>
					{notifications.slice(0, 5).map(n => (
						<div
							className={cx({
								UnseenNotification: !n.seen,
							})}
							key={n.text}>
							{n.text}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

const HeaderMobileMenu = ({ me, onLogout }) => {
	const [visible, setVisible] = useState(false)

	return (
		<div className='HeaderMobileMenu'>
			<Icon onClick={() => setVisible(v => !v)} style={{ marginBottom: '-4px' }} width='32' height='32' name='menu' />
			{visible && (
				<div className='HeaderMobileMenu__content'>
					{links({ me: me, onLogout })
						.filter(l => l.visible() && !l.mobile())
						.map(l => l.render())}
				</div>
			)}
		</div>
	)
}

const links = ({ me, onLogout }) => [
	{
		route: 'about',
		mobile: () => false,
		visible: () => true,
		render: () => <Link to='about'>O nama</Link>,
	},
	{
		route: 'articles',
		mobile: () => false,
		visible: () => true,
		render: () => <Link to='articles'>Pregled artikala</Link>,
	},
	{
		route: 'profile',
		mobile: () => false,
		visible: () => me?.role === 'user',
		render: () => <Link to='profile'>Moj profil</Link>,
	},
	{
		route: 'notifications',
		mobile: () => true,
		visible: () => me?.role === 'user',
		render: () => <HeaderNotification me={me} notifications={me?.notifications} />,
	},
	{
		route: 'notifications',
		mobile: () => true,
		visible: () => me?.role === 'user',
		render: () => (
			<Link to='cart'>
				<Icon style={{ marginBottom: '-4px' }} width='32' height='32' name='cart' />
			</Link>
		),
	},
	{
		route: 'menu',
		mobile: () => true,
		visible: () => true,
		render: () => <HeaderMobileMenu me={me} onLogout={onLogout} />,
	},
	{
		route: 'orders',
		mobile: () => false,
		visible: () => me?.role === 'manager',
		render: () => <Link to='orders'>Porudzbine</Link>,
	},
	{
		route: 'new_article',
		mobile: () => false,
		visible: () => me?.role === 'manager',
		render: () => <Link to='new_article'>Novi artikal</Link>,
	},
	{
		route: 'login',
		mobile: () => false,
		visible: () => !me,
		render: () => <Button to='login'>Prijava</Button>,
	},
	{
		route: 'logout',
		mobile: () => false,
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
			<div className='Header__linksMobile'>
				{links({ me: state.me, onLogout })
					.filter(l => l.visible() && l.mobile())
					.map(l => l.render())}
			</div>
		</div>
	)
}

export default Header
