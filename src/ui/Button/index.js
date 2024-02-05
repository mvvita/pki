import './style.sass'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'

const Button = ({ className, onClick, to, white, small, whiteBlack, children, style }) => {
	const navigate = useNavigate()

	const cs = cx('Button', className, {
		'Button--white': white,
		'Button--whiteBlack': whiteBlack,
		'Button--small': small,
	})

	const handleClick = () => {
		onClick && onClick()
		to && navigate(to)
	}

	return (
		<button style={style} className={cs} onClick={handleClick}>
			{children}
		</button>
	)
}

export default Button
