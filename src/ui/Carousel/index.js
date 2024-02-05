import './style.sass'
import cx from 'classnames'
import Icon from '../Icon'
import { useEffect, useState } from 'react'

const Carousel = ({ arrowFill, className, items, ItemComponent, timeout = 5000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [toggleInterval, setToggleInterval] = useState(null)

	const cs = cx('Carousel', className)

	const toggleIndex = (diff, clrInterval) => {
		const calculatedIndex = currentIndex + diff

		if (clrInterval) {
			toggleInterval && clearInterval(toggleInterval)
		}

		if (calculatedIndex < 0) {
			setCurrentIndex(items.length - 1)
			return
		}

		if (calculatedIndex === items.length) {
			setCurrentIndex(0)
			return
		}

		setCurrentIndex(calculatedIndex)
	}

	const autoSlide = () => {
		setCurrentIndex(i => (i + 1 === items.length ? 0 : i + 1))
	}

	useEffect(() => {
		const interv = setInterval(autoSlide, timeout)
		setToggleInterval(interv)

		return () => {
			clearInterval(interv)
		}
	}, [])

	return (
		<div className={cs}>
			<Icon
				onClick={toggleIndex.bind(null, -1, true)}
				className='Carousel__icon Carousel__icon--left'
				name='arrow_head'
				width='24px'
				fill={arrowFill || '#D9D9D9'}
				height='24px'
			/>
			<Icon
				onClick={toggleIndex.bind(null, 1, true)}
				className='Carousel__icon Carousel__icon--right'
				name='arrow_head'
				width='24px'
				fill={arrowFill || '#D9D9D9'}
				height='24px'
			/>
			<div className='Carousel__content' style={{ marginLeft: `-${currentIndex * 100}%` }}>
				{items.map(i => (
					<ItemComponent {...i} />
				))}
			</div>
		</div>
	)
}

export default Carousel
