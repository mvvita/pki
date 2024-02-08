import './style.sass'
import { useParams } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useState } from 'react'
import Textarea from '../../ui/Textarea'
import Image from '../../ui/Image'
import AppContext from '../../context'

const SingleArticlePage = () => {
	const { state, setState, setSuccessAlertMessage, setErrorAlertMessage } = useContext(AppContext)
	const params = useParams()
	const [comment, setComment] = useState('')
	const [quantity, setQuantity] = useState('1')

	const item = state.cakes.find(c => c.id === parseInt(params.articleId, 10))
	if (!item) {
		return null
	}

	const onQuantityChange = newValue => {
		if (newValue.length > 3) {
			return
		}

		setQuantity(newValue)
	}

	const renderWithBreakLines = value => {
		return value.split('\n').map(i => (
			<>
				{i}
				<br />
			</>
		))
	}

	const addToCart = () => {
		if (quantity === '') {
			setErrorAlertMessage('Morate uneti kolicinu artikla.')
			return
		}

		if (isNaN(quantity) || parseInt(quantity, 10) <= 0) {
			setErrorAlertMessage('Morate uneti ispravnu kolicinu artikla.')
			return
		}

		const pendingOrder = state.orders.find(o => o.userId === state.me.id && !o.number)
		const newItem = { name: item.header, imgSrc: item.imgSrc, quantity: parseInt(quantity, 10), price: item.price }

		const newOrder = !!pendingOrder
			? {
					...pendingOrder,
					articles: [...pendingOrder.articles, newItem],
				}
			: {
					userId: state.me.id,
					articles: [newItem],
				}

		const orders = !!pendingOrder
			? state.orders.map(o => (o.userId === state.me.id && !o.number ? newOrder : o))
			: [newOrder, ...state.orders]
		setState({ orders })
		setSuccessAlertMessage('Uspesno ste dodali artikal u korpu.')
	}

	const addComment = () => {
		if (comment === '') {
			setErrorAlertMessage('Morate uneti komentar.')
			return
		}

		const updatedArticle = {
			...item,
			comments: [
				{
					date: new Date(),
					comment,
					user: state.me.name,
				},
				...item.comments,
			],
		}

		setSuccessAlertMessage('Uspesno dodat komentar.')
		setState({ cakes: state.cakes.map(c => (c.id === item.id ? updatedArticle : c)) })
		setComment('')
	}

	const dateParse = d => {
		if (typeof d === 'string') {
			return new Date(d)
		}

		return d
	}

	return (
		<div className='SingleArticlePage'>
			<div className='SingleArticlePage__content'>
				<div className='ArticleContainer'>
					<div className='ArticleContainer__row'>
						<div className='Article__contentHeader'>{item.header}</div>
						<div className='Article__contentHeaderPrice'>{item.price}RSD</div>
					</div>
					<div className='Article'>
						<Image className='Article__image' src={item.imgSrc} />
						<div className='Article__content'>
							<div className='Article__contentDescription'>
								<div className='Article__contentHeader'>Opis</div>
								<div className='Article__contentSummary'>{renderWithBreakLines(item.description)}</div>
							</div>
						</div>
					</div>
					<div className='Article__contents'>
						<div className='Article__contentHeader'>Sastojci</div>
						<div className='Article__contentSummary'>{renderWithBreakLines(item.content)}</div>
					</div>
					{state.me && state.me?.role !== 'manager' && (
						<div className='Article__actions'>
							<Button onClick={addToCart}>Dodaj u korpu</Button>
							<Input value={quantity} onChange={onQuantityChange} />
							<div>količina</div>
						</div>
					)}
				</div>
				{state.me && state.me?.role !== 'manager' && (
					<div className='SingleArticlePage__commentForm'>
						<div className='SingleArticlePage__header'>Ostavite komentar</div>
						<Textarea
							rows='7'
							className='SingleArticlePage__textarea'
							placeholder='Komentar...'
							value={comment}
							onChange={setComment}
						/>
						<div className='u-mt-16'>
							<Button onClick={addComment}>Potvrdi</Button>
						</div>
					</div>
				)}
				<div className='SingleArticlePage__commentForm'>
					<div className='SingleArticlePage__header'>Komentari korisnika</div>
					<div className='SingleArticlePageComments'>
						{!item.comments?.length && <div>Nije ostavljen nijedan komentar.</div>}
						{item.comments.map(c => (
							<div className='SingleArticlePageComment' key={dateParse(c.date)}>
								<div>{c.user} kaže...</div>
								<div className='SingleArticlePageComment__comment'>"{c.comment}"</div>
								<div className='SingleArticlePageComment__date'>
									{dateParse(c.date).getDate()}.{dateParse(c.date).getMonth() + 1}.
									{dateParse(c.date).getFullYear()}.
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleArticlePage
