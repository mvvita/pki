import './style.sass'
import { Link, useParams } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useState } from 'react'
import { singleArticle } from './mock'
import Textarea from '../../ui/Textarea'
import Image from '../../ui/Image'
import AppContext from '../../context'

const SingleArticlePage = () => {
	const { state } = useContext(AppContext)
	const params = useParams()
	const [comment, setComment] = useState('')

	const item = state.cakes.find(c => c.id === parseInt(params.articleId, 10))
	if (!item) {
		return null
	}

	return (
		<div className='SingleArticlePage'>
			<div className='SingleArticlePage__content'>
				<div className='ArticleContainer'>
					<div className='ArticleContainer__row'>
						<div className='Article__contentHeader'>{item.header}</div>
						<div className='Article__contentHeaderPrice'>{item.price}</div>
					</div>
					<div className='Article'>
						<Image className='Article__image' src={item.imgSrc} />
						<div className='Article__content'>
							<div className='Article__contentDescription'>
								<div className='Article__contentHeader'>Opis</div>
								<div className='Article__contentSummary'>{item.description}</div>
							</div>
						</div>
					</div>
					<div className='Article__contents'>
						<div className='Article__contentHeader'>Sastojci</div>
						<div className='Article__contentSummary'>{item.content}</div>
					</div>
					<div className='Article__actions'>
						<Button>Dodaj u korpu</Button>
						<Input value='1' onChange={() => {}} />
						<div>količina</div>
					</div>
				</div>
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
						<Button>Potvrdi</Button>
					</div>
				</div>
				<div className='SingleArticlePage__commentForm'>
					<div className='SingleArticlePage__header'>Komentari korisnika</div>
					<div className='SingleArticlePageComments'>
						{item.comments.map(c => (
							<div className='SingleArticlePageComment' key={c.date}>
								<div>{c.user} kaže...</div>
								<div className='SingleArticlePageComment__comment'>"{c.comment}"</div>
								<div className='SingleArticlePageComment__date'>
									{c.date.getDate()}.{c.date.getMonth() + 1}.{c.date.getFullYear()}.
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
