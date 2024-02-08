import './style.sass'
import cx from 'classnames'

const AlertBox = ({ success, fail, message }) => {
	if (!message) {
		return null
	}

	const className = cx('AlertBox', {
		'AlertBox--success': success,
		'AlertBox--fail': fail,
	})

	return <div className={className}>{message}</div>
}

export default AlertBox
