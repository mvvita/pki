import './style.sass'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useState } from 'react'
import cx from 'classnames'
import { articles } from './mock'

const types = {
	CAKE: 'CAKE',
	COOKIE: 'COOKIE',
}

const SingleArticle = item => {
	return (
		<div className='SingleArticle'>
			<img className='SingleArticle__image' src={item.imgSrc} />
			<div className='SingleArticle__content'>
				<div className='SingleArticle__contentDescription'>
					<div className='SingleArticle__contentHeader'>{item.header}</div>
					<div className='SingleArticle__contentSummary'>{item.content}</div>
				</div>
				<div>
					<Button>POGLEDAJ KOLAČ</Button>
				</div>
			</div>
		</div>
	)
}

const Articles = () => {
	const [search, setSearch] = useState('')
	const [type, setType] = useState(types.CAKE)
	const [page, setPage] = useState(1)

	const numPages = 4

	return (
		<div className='Articles'>
			<div className='Articles__content'>
				<div className='FormLabel'>Pretraga artikala</div>
				<Input className='u-mt-16' value={search} onChange={setSearch} placeholder='Unesite ime...' />
				<div className='Articles__drawer'>
					<div onClick={setType.bind(null, types.CAKE)} className={cx({ SelectedType: type === types.CAKE })}>
						TORTE
					</div>
					<div onClick={setType.bind(null, types.COOKIE)} className={cx({ SelectedType: type === types.COOKIE })}>
						KOLAČI
					</div>
				</div>
				<div className='ArticlesList'>
					{articles.map(a => (
						<SingleArticle {...a} key={a.id} />
					))}
				</div>
				{numPages > 1 && (
					<div className='Articles__pagerContainer'>
						<div className='Articles__pager'>
							<div>{'<'}</div>
							{[...new Array(numPages)]
								.map((_, i) => i + 1)
								.map(v => (
									<div className={cx({ Articles__pageSelected: v === page })} key={v}>
										{v}
									</div>
								))}
							<div>{'>'}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Articles
