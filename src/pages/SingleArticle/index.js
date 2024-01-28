import './style.sass'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useState } from 'react'
import { singleArticle } from './mock'
import Textarea from '../../ui/Textarea'

const SingleArticle = () => {
	const [comment, setComment] = useState('')

	const item = singleArticle

	return (
		<div className='SingleArticle'>
			<div className='SingleArticle__content'>
				<div className='ArticleContainer'>
					<div className='ArticleContainer__row'>
						<div className='Article__contentHeader'>{item.header}</div>
						<div className='Article__contentHeaderPrice'>{item.price}</div>
					</div>
					<div className='Article'>
						<img className='Article__image' src={item.imgSrc} />
						<div className='Article__content'>
							<div className='Article__contentDescription'>
								<div className='Article__contentHeader'>Opis</div>
								<div className='Article__contentSummary'>{item.content}</div>
							</div>
						</div>
					</div>
					<div className='Article__contents'>
						<div className='Article__contentHeader'>Sastojci</div>
						<div className='Article__contentSummary'>{item.description}</div>
					</div>
					<div className='Article__actions'>
						<Button>Dodaj u korpu</Button>
						<Input value='1' onChange={() => {}} />
						<div>količina</div>
					</div>
				</div>
				<div className='SingleArticle__commentForm'>
					<div className='SingleArticle__header'>Ostavite komentar</div>
					<Textarea
						rows='7'
						className='SingleArticle__textarea'
						placeholder='Komentar...'
						value={comment}
						onChange={setComment}
					/>
					<div className='u-mt-16'>
						<Button>Potvrdi</Button>
					</div>
				</div>
				<div className='SingleArticle__commentForm'>
					<div className='SingleArticle__header'>Komentari korisnika</div>
					<div className='SingleArticleComments'>
						{item.comments.map(c => (
							<div className='SingleArticleComment' key={c.date}>
								<div>{c.user} kaže...</div>
								<div className='SingleArticleComment__comment'>"{c.comment}"</div>
								<div className='SingleArticleComment__date'>
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

export default SingleArticle
