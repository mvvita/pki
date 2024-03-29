import './style.sass'
import Button from '../../ui/Button'
import { useContext, useState } from 'react'
import cx from 'classnames'
import AppContext from '../../context'
import { useNavigate } from 'react-router-dom'

const statusCopy = {
	approved: 'ODOBRENO',
	rejected: 'ODBIJENO',
	pending: 'PORUČENO',
}

const UserProfile = () => {
	const { state } = useContext(AppContext)
	const navigate = useNavigate()
	const [count, setCount] = useState(2)

	const user = state.me
	if (!user) {
		return null
	}

	const getOrderClass = order => {
		return cx('UserProfile__order', {
			'UserProfile__order--green': order.status === 'approved',
			'UserProfile__order--yellow': order.status === 'pending',
			'UserProfile__order--red': order.status === 'rejected',
		})
	}

	const orders = user.orders.filter(o => !!o.number)

	return (
		<div className='UserProfile'>
			<div className='UserProfile__content'>
				<div className='UserProfile__header'>MOJ PROFIL</div>
				<div className='UserProfile__box'>
					<div className='UserProfile__infoGrid'>
						<div>Ime:</div>
						<div className='UserProfile__answer'>{user.name}</div>
						<div>Prezime:</div>
						<div className='UserProfile__answer'>{user.lastName}</div>
						<div>Email:</div>
						<div className='UserProfile__answer'>{user.email}</div>
						<div>Kontakt telefon:</div>
						<div className='UserProfile__answer'>{user.phone}</div>
						<div>Adresa:</div>
						<div className='UserProfile__answer'>{user.address}</div>
						<div>Korisnicko ime:</div>
						<div className='UserProfile__answer'>{user.username}</div>
					</div>
					<Button to='/profile/edit'>Izmeni</Button>
				</div>
				<div className='UserProfile__header mt60'>Ranije porudzbine</div>
				{orders.slice(0, count).map(o => (
					<div onClick={() => navigate(`/orders/${o.number}`)} className={getOrderClass(o)} key={o.number}>
						<div className='OrderBadge'>{statusCopy[o.status]}</div>
						<div>BROJ PORUDZBINE: {o.number}</div>
						<div className='u-mt-16'>UKUPNO: {o.articles.reduce((acc, a) => acc + a.price * a.quantity, 0)}RSD</div>
					</div>
				))}
				{count < orders.length && (
					<div className='UserProfile__loadMore'>
						<Button onClick={() => setCount(c => c + 3)}>Ucitaj jos</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserProfile
