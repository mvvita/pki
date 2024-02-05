import './style.sass'
import cx from 'classnames'

const Select = ({ className, value, onChange, onChangeWithTarget, fit, options, ...props }) => {
	const cs = cx('Select', className, {
		'Select--fit': fit,
	})

	const handleChange = e => {
		onChange && onChange(e.target.value)
		onChangeWithTarget && onChangeWithTarget(e)
	}

	return (
		<select {...props} value={value} onChange={handleChange} className={cs}>
			{options.map(o => (
				<option key={o.value} value={o.value}>
					{o.displayValue}
				</option>
			))}
		</select>
	)
}

export default Select
