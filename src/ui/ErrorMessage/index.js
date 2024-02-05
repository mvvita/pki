import './style.sass'
import cx from 'classnames'

const ErrorMessage = ({ className, messages }) => {
	const cs = cx('ErrorMessage', className)

	if (messages.length === 0) {
		return null
	}

	return (
		<div className={cs}>
			{messages.map(m => (
				<div key={m} className='ErrorMessage__message'>
					{m}
				</div>
			))}
		</div>
	)
}

export default ErrorMessage
