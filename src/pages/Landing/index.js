import './style.sass'
import { Link } from 'react-router-dom'
import Carousel from '../../ui/Carousel'
import Button from '../../ui/Button'
import { promotions, userRatings } from './mock'
import ReactStars from 'react-stars'
import Image from '../../ui/Image'
import AppContext from '../../context'
import { useContext, useState } from 'react'

function truncate(str, maxlength) {
	if (str.length <= maxlength) {
		return str
	}

	const slicedString = str.slice(0, maxlength - 1)
	const lastSpace = slicedString.lastIndexOf(' ', slicedString.length - 1)

	return (lastSpace > 0 ? slicedString.slice(0, lastSpace) : slicedString) + '...'
}

const Promotion = item => {
	return (
		<div>
			<div className='Landing__promotion'>
				<Image src={item.imgSrc} style={{ width: '320px', height: '320px' }} />
				<div className='Landing__promotionContent'>
					<div className='Landing__promotionContentDescription'>
						<div className='Landing__promotionContentHeader'>{item.header}</div>
						<div className=''>{truncate(item.description, 320)}</div>
					</div>
					<div>
						<Button to={`articles/${item.id}`}>POGLEDAJ ARTIKAL</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

const UserRating = item => {
	return (
		<div>
			<div className='Landing__userRating'>
				<Image src={item.imgSrc} style={{ width: '320px', height: '320px' }} />
				<div className='Landing__userRatingContent'>
					<div className='Landing__userRatingContentDescription'>
						<div className='Landing__userRatingContentHeader'>{item.name}</div>
						<ReactStars color2='#000000' size={32} count={5} value={item.rating} edit={false} />
						<div style={{ marginTop: '20px' }} className=''>
							"{item.comment}"
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Landing = () => {
	const { state } = useContext(AppContext)

	return (
		<div className='Landing'>
			<div className='Landing__imageContainer'>
				<div className='Landing__imageText'>
					<div>Vaše omiljene torte i kolači...</div>
					<div>
						... na jedan{' '}
						<Link className='AppLinkWhite' to='/articles'>
							klik
						</Link>{' '}
						od vas.
					</div>
				</div>
				<Image className='Landing__image' alt='noimg' src='backgroundImage'></Image>
			</div>
			<div className='Landing__carousel'>
				<div className='Landing__subheader'>Iz Ponude Izdvajamo</div>
				<Carousel className='Landing__slides' items={state.cakes.slice(0, 3)} ItemComponent={Promotion} />
			</div>
			<div className='Landing__carousel Landing__carousel--yellow'>
				<div className='Landing__subheader'>šta naši korisnici misle o nama</div>
				<Carousel
					arrowFill='#00000080'
					timeout={3500}
					className='Landing__slides'
					items={userRatings}
					ItemComponent={UserRating}
				/>
			</div>
		</div>
	)
}

export default Landing
