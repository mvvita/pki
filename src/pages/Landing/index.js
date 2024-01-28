import './style.sass'
import backgroundImage from './[removal.ai]_eb8ebcc3-f3b9-432c-992d-e441ee26013a-candle-cupcake-happy-birthday-happy-birthday-wallpaper-preview-transformed.png'
import { Link } from 'react-router-dom'
import Carousel from '../../ui/Carousel'
import Button from '../../ui/Button'
import { promotions, userRatings } from './mock'
import ReactStars from 'react-stars'

const Promotion = item => {
	return (
		<div>
			<div className='Landing__promotion'>
				<img src={item.imgSrc} style={{ width: '320px', height: '320px' }} />
				<div className='Landing__promotionContent'>
					<div className='Landing__promotionContentDescription'>
						<div className='Landing__promotionContentHeader'>{item.header}</div>
						<div className=''>{item.content}</div>
					</div>
					<div>
						<Button>POGLEDAJ KOLAČ</Button>
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
				<img src={item.imgSrc} style={{ width: '320px', height: '320px' }} />
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
				<img className='Landing__image' alt='noimg' src={backgroundImage}></img>
			</div>
			<div className='Landing__carousel'>
				<div className='Landing__subheader'>Iz Ponude Izdvajamo</div>
				<Carousel className='Landing__slides' items={promotions} ItemComponent={Promotion} />
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
