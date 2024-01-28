import './style.sass'
import cx from 'classnames'

const Textarea = ({ className, value, onChange, onChangeWithTarget, fit, type, ...props }) => {
	const cs = cx('Textarea', className, {
		'Textarea--fit': fit,
	})

	const handleChange = e => {
		onChange && onChange(e.target.value)
		onChangeWithTarget && onChangeWithTarget(e)
	}

	return <textarea {...props} value={value} onChange={handleChange} className={cs} />
}

export default Textarea
