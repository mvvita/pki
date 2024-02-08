import React, { useContext, useEffect, useState } from 'react'
import './style.sass'
import Button from '../../ui/Button'
import Image from '../../ui/Image'
import AppContext from '../../context'
import cx from 'classnames'
import Input from '../../ui/Input'

const SingleOrder = ({ o }) => {
	const { state, setState, setSuccessAlertMessage } = useContext(AppContext)
	const user = state.users.find(u => u.id === o.userId)

	const updateStatus = status => {
		const updatedOrders = state.orders.map(om => (om.number === o.number ? { ...om, status } : om))
		const action = status === 'rejected' ? 'odbio' : 'prihvatio'
		const notificationText = `Admin je ${action} vasu porudzbinu ${o.number}.`
		const updatedUsers = state.users.map(u =>
			u.id === user.id ? { ...u, notifications: [{ text: notificationText, seen: false }, ...u.notifications] } : u,
		)

		setSuccessAlertMessage('Uspesno promenjen status porudzbine.')
		setState({ orders: updatedOrders, users: updatedUsers })
	}

	return (
		<div className='Orders__order'>
			<div className='OrderNumber'>PORUDZBINA: #{o.number}</div>
			<div className='OrderUserInfo'>Informacije o korisniku</div>
			<div>
				<div className='OrderUserInfoRow'>
					Ime:{' '}
					<span>
						{user.name} {user.lastName}
					</span>
				</div>
				<div className='OrderUserInfoRow'>
					Adresa: <span>{user.address}</span>
				</div>
				<div className='OrderUserInfoRow'>
					Email: <span>{user.email}</span>
				</div>
			</div>
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
			<div className='OrderButtons'>
				<Button onClick={updateStatus.bind(null, 'approved')} green>
					Odobri
				</Button>
				<Button onClick={updateStatus.bind(null, 'rejected')} red>
					Odbij
				</Button>
			</div>
		</div>
	)
}

const Orders = () => {
	const { state } = useContext(AppContext)
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1)

	const filteredOrders = state.orders.filter(o => {
		const user = state.users.find(u => u.id === o.userId)

		return o.status === 'pending' && `${user.name} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
	})

	const numPages = Math.ceil(filteredOrders.length / 2.0)

	useEffect(() => {
		setPage(1)
	}, [search])

	const changePage = newPage => {
		if (newPage === 0) {
			return
		}

		if (newPage > numPages) {
			return
		}

		setPage(newPage)
	}

	if (!state.me) {
		return null
	}

	return (
		<div className='Orders'>
			<div className='Orders__content'>
				<h2 className='FormHeader'>Porudzbine</h2>
				<Input className='Orders__search' value={search} onChange={setSearch} placeholder='Unesite ime korisnika...' />
				{filteredOrders.length === 0 && (
					<div className='Orders__noResults'>Nije pronadjena nijedna neobradjena porudzbina.</div>
				)}
				{filteredOrders.slice((page - 1) * 2, page * 2).map(o => (
					<SingleOrder key={o.userId} o={o} />
				))}
				{numPages > 1 && (
					<div className='Orders__pagerContainer'>
						<div className='Orders__pager'>
							<div onClick={() => changePage(page - 1)}>{'<'}</div>
							{[...new Array(numPages)]
								.map((_, i) => i + 1)
								.map(v => (
									<div
										onClick={() => changePage(v)}
										className={cx({ Orders__pageSelected: v === page })}
										key={v}>
										{v}
									</div>
								))}
							<div onClick={() => changePage(page + 1)}>{'>'}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Orders
