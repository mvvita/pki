import React, { useContext } from 'react'
import './style.sass'
import { user as mockUser } from '../UserProfile/mock'
import cx from 'classnames'
import Button from '../../ui/Button'
import Image from '../../ui/Image'
import AppContext from '../../context'
import { useNavigate, useParams } from 'react-router-dom'

const statusCopy = {
	approved: 'ODOBRENO',
	rejected: 'ODBIJENO',
	pending: 'PORUČENO',
}

const Order = ({ cart }) => {
	const { state, setState, setSuccessAlertMessage } = useContext(AppContext)
	const params = useParams()
	const navigate = useNavigate()

	const user = state.me

	let orderNumber = params?.orderId ? parseInt(params?.orderId, 10) : null

	if (!state.me) {
		return null
	}

	const getOrderClass = order => {
		return cx('Order__order', {
			'Order__order--green': order.status === 'approved',
			'Order__order--yellow': order.status === 'pending',
			'Order__order--red': order.status === 'rejected',
		})
	}

	const getOrder = () => {
		if (cart) {
			const foundOrder = user.orders.find(o => !o.number)
			if (!foundOrder) {
				return {
					articles: [],
				}
			}

			return foundOrder
		}

		return user.orders.find(o => o.number === orderNumber)
	}

	const onOrder = () => {
		const orderNumber = Math.max(0, ...state.orders.map(o => o.number).filter(e => e)) + 1
		setState({
			orders: state.orders.map(o =>
				o.userId === user.id && !o.number ? { ...o, status: 'pending', number: orderNumber } : o,
			),
		})

		setSuccessAlertMessage('Uspesno ste porucili artikle!')
		navigate('/profile')
	}

	const o = getOrder()

	return (
		<div className='Order'>
			<div className='Order__content'>
				{cart && <div className='Order__header'>KORPA</div>}
				<div className={getOrderClass(o)}>
					{o.number && (
						<>
							<div className='OrderBadge'>{statusCopy[o.status]}</div>
							<div className='OrderNumber'>PORUDZBINA: #{o.number}</div>
						</>
					)}
					<div className='OrderArticles'>
						<div style={{ justifyContent: 'start', fontSize: '16px', color: '#566270' }}>Artikal</div>
						<div style={{ justifyContent: 'center', fontSize: '16px', color: '#566270' }}>Kolicina</div>
						<div style={{ justifyContent: 'flex-end', fontSize: '16px', color: '#566270' }}>Cena</div>
						<div className='OrderArticles__separator' />
						{o.articles.map(a => (
							<React.Fragment key={a.name}>
								<div className='OrderArticles__name'>
									<Image src={a.imgSrc} />
									{a.name}
								</div>
								<div style={{ justifyContent: 'center' }}>{a.quantity}</div>
								<div style={{ justifyContent: 'flex-end' }}>{a.price * a.quantity}</div>
								<div className='OrderArticles__separator' />
							</React.Fragment>
						))}
						<div />
						<div />
						<div className='OrderArticles__price' style={{ justifyContent: 'flex-end' }}>
							{o.articles.reduce((acc, a) => acc + a.price * a.quantity, 0)}
						</div>
					</div>
					{o.articles.length > 0 && !o.number && (
						<div className='Order__button'>
							<Button onClick={onOrder}>PORUČI</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Order
