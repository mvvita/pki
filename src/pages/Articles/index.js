import './style.sass'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useEffect, useState } from 'react'
import cx from 'classnames'
import Image from '../../ui/Image'
import AppContext from '../../context'

const types = {
	CAKE: 'CAKE',
	COOKIE: 'COOKIE',
}

function truncate(str, maxlength) {
	if (str.length <= maxlength) {
		return str
	}

	const slicedString = str.slice(0, maxlength - 1)
	const lastSpace = slicedString.lastIndexOf(' ', slicedString.length - 1)

	return (lastSpace > 0 ? slicedString.slice(0, lastSpace) : slicedString) + '...'
}

const SingleArticle = item => {
	return (
		<div className='SingleArticle'>
			<Image className='SingleArticle__image' src={item.imgSrc} />
			<div className='SingleArticle__content'>
				<div className='SingleArticle__contentDescription'>
					<div className='SingleArticle__contentHeader'>{item.header}</div>
					<div className='SingleArticle__contentSummary'>{truncate(item.description, 220)}</div>
				</div>
				<div>
					<Button to={`/articles/${item.id}`}>POGLEDAJ ARTIKAL</Button>
				</div>
			</div>
		</div>
	)
}

const Articles = () => {
	const { state } = useContext(AppContext)
	const [search, setSearch] = useState('')
	const [type, setType] = useState(types.CAKE)
	const [page, setPage] = useState(1)

	const filteredCakes = state.cakes.filter(c => {
		return c.type === type && c.header.toLowerCase().includes(search.toLowerCase())
	})

	useEffect(() => {
		setPage(1)
	}, [search, type])

	const numPages = Math.ceil(filteredCakes.length / 3)

	const changePage = newPage => {
		if (newPage === 0) {
			return
		}

		if (newPage > numPages) {
			return
		}

		setPage(newPage)
	}

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
					{filteredCakes.slice((page - 1) * 3, page * 3).map(a => (
						<SingleArticle {...a} key={a.id} />
					))}
				</div>
				{numPages > 1 && (
					<div className='Articles__pagerContainer'>
						<div className='Articles__pager'>
							<div onClick={() => changePage(page - 1)}>{'<'}</div>
							{[...new Array(numPages)]
								.map((_, i) => i + 1)
								.map(v => (
									<div
										onClick={() => changePage(v)}
										className={cx({ Articles__pageSelected: v === page })}
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

export default Articles
